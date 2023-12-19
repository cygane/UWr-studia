#lang racket
(require data/heap)
(provide sim? wire?
         (contract-out
          [make-sim        (-> sim?)]
          [sim-wait!       (-> sim? positive? void?)]
          [sim-time        (-> sim? real?)]
          [sim-add-action! (-> sim? positive? (-> any/c) void?)]

          [make-wire       (-> sim? wire?)]
          [wire-on-change! (-> wire? (-> any/c) void?)]
          [wire-value      (-> wire? boolean?)]
          [wire-set!       (-> wire? boolean? void?)]

          [bus-value (-> (listof wire?) natural?)]
          [bus-set!  (-> (listof wire?) natural? void?)]

          [gate-not  (-> wire? wire? void?)]
          [gate-and  (-> wire? wire? wire? void?)]
          [gate-nand (-> wire? wire? wire? void?)]
          [gate-or   (-> wire? wire? wire? void?)]
          [gate-nor  (-> wire? wire? wire? void?)]
          [gate-xor  (-> wire? wire? wire? void?)]

          [wire-not  (-> wire? wire?)]
          [wire-and  (-> wire? wire? wire?)]
          [wire-nand (-> wire? wire? wire?)]
          [wire-or   (-> wire? wire? wire?)]
          [wire-nor  (-> wire? wire? wire?)]
          [wire-xor  (-> wire? wire? wire?)]

          [flip-flop (-> wire? wire? wire? void?)]))

;struktura wire
(struct wire ([sim #:mutable] [value #:mutable] [actions #:mutable]))

;tworzenie wire
(define (make-wire sim)
  (wire sim #f empty))

;zmiana value w wire
(define (wire-set! w v)
  (unless (equal? (wire-value w) v)
  (begin
    (set-wire-value! w v)
    (accept-wire-actions! w))))

;wywołanie actions
(define (accept-wire-actions! w)
    (for-each
     (lambda (act)
       (act))
  (wire-actions w)))

;dodawanie action do wire
(define (wire-on-change! w act)
    (set-wire-actions! w (cons act (wire-actions w)))
  (act))

;struktura sim
(struct sim ([time #:mutable] [agenda #:mutable]))

;compare
(define compare
  (lambda (pair1 pair2)(<= (cdr pair1) (cdr pair2))))

;tworzenie sim
(define (make-sim)
  (sim 0 (make-heap compare)))

;uruchamianie sim
(define (sim-wait! s t)
  (define t2 (+ t (sim-time s)))
  (define (next)
    (when (> (heap-count (sim-agenda s)) 0) 
      (define act (heap-min (sim-agenda s)))
      (when (<= (cdr act) t2)
        (begin
          (heap-remove-min! (sim-agenda s))
          (set-sim-time! s (cdr act))
          ((car act))
          (next)))))
  (begin
    (next)
    (set-sim-time! s t2)))
  
;dodawanie action do sim
(define (sim-add-action! s t act)
  (heap-add! (sim-agenda s) (cons act (+ (sim-time s) t))))

;bramki logiczne
(define (gate-not out in)
  (define (fun)
    (wire-set! out (not (wire-value in))))
  (wire-on-change! in
                   (lambda () (sim-add-action! (wire-sim out) 1 fun))))

(define (gate-and out in1 in2)
  (define (fun)
    (wire-set! out (and (wire-value in1) (wire-value in2))))
  (begin
    (wire-on-change! in1
                   (lambda () (sim-add-action! (wire-sim out) 1 fun)))
    (wire-on-change! in2
                   (lambda () (sim-add-action! (wire-sim out) 1 fun)))))

(define (gate-or out in1 in2)
  (define (fun)
    (wire-set! out (or (wire-value in1) (wire-value in2))))
  (begin
    (wire-on-change! in1
                   (lambda () (sim-add-action! (wire-sim out) 1 fun)))
    (wire-on-change! in2
                   (lambda () (sim-add-action! (wire-sim out) 1 fun)))))

(define (gate-nor out in1 in2)
  (define (fun)
    (wire-set! out (not (or (wire-value in1) (wire-value in2)))))
  (begin
    (wire-on-change! in1
                   (lambda () (sim-add-action! (wire-sim out) 1 fun)))
    (wire-on-change! in2
                   (lambda () (sim-add-action! (wire-sim out) 1 fun)))))

(define (gate-nand out in1 in2)
  (define (fun)
    (wire-set! out (not (and (wire-value in1) (wire-value in2)))))
  (begin
    (wire-on-change! in1
                   (lambda () (sim-add-action! (wire-sim out) 1 fun)))
    (wire-on-change! in2
                   (lambda () (sim-add-action! (wire-sim out) 1 fun)))))

(define (gate-xor out in1 in2)
  (define (fun)
    (wire-set! out (not (equal? (wire-value in1) (wire-value in2)))))
  (begin
    (wire-on-change! in1
                   (lambda () (sim-add-action! (wire-sim out) 2 fun)))
    (wire-on-change! in2
                   (lambda () (sim-add-action! (wire-sim out) 2 fun)))))
;nowy wire i bramka
(define (wire-not in)
  (define new (make-wire (wire-sim in)))
  (gate-not new in)
  new)

(define (wire-and in1 in2)
  (define new (make-wire (wire-sim in1)))
  (gate-and new in1 in2)
  new)

(define (wire-or in1 in2)
  (define new (make-wire (wire-sim in1)))
  (gate-or new in1 in2)
  new)

(define (wire-nor in1 in2)
  (define new (make-wire (wire-sim in1)))
  (gate-nor new in1 in2)
  new)

(define (wire-nand in1 in2)
  (define new (make-wire (wire-sim in1)))
  (gate-nand new in1 in2)
  new)

(define (wire-xor in1 in2)
  (define new (make-wire (wire-sim in1)))
  (gate-xor new in1 in2)
  new)

;reszta z szablonu
(define (bus-set! wires value)
  (match wires
    ['() (void)]
    [(cons w wires)
     (begin
       (wire-set! w (= (modulo value 2) 1))
       (bus-set! wires (quotient value 2)))]))

(define (bus-value ws)
  (foldr (lambda (w value) (+ (if (wire-value w) 1 0) (* 2 value)))
         0
         ws))

(define (flip-flop out clk data)
  (define sim (wire-sim data))
  (define w1  (make-wire sim))
  (define w2  (make-wire sim))
  (define w3  (wire-nand (wire-and w1 clk) w2))
  (gate-nand w1 clk (wire-nand w2 w1))
  (gate-nand w2 w3 data)
  (gate-nand out w1 (wire-nand out w3)))
    
;testowanie
(define sim1 (make-sim))

(define (make-counter n clk en)
  (if (= n 0)
      '()
      (let [(out (make-wire sim1))]
        (flip-flop out clk (wire-xor en out))
        (cons out (make-counter (- n 1) clk (wire-and en out))))))

(define clk (make-wire sim1))
(define en  (make-wire sim1))
(define counter (make-counter 4 clk en))

(wire-set! en #t)

; Kolejne wywołania funkcji tick zwracają wartość licznika
; w kolejnych cyklach zegara. Licznik nie jest resetowany,
; więc początkowa wartość licznika jest trudna do określenia
(define (tick)
  (wire-set! clk #t)
  (sim-wait! sim1 20)
  (wire-set! clk #f)
  (sim-wait! sim1 20)
  (bus-value counter))
      
  












