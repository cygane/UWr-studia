#lang plait

(define-type Prop
(var [v : String])
(conj [l : Prop] [r : Prop])
(disj [l : Prop] [r : Prop])
(neg [f : Prop]))

;zadanie 7

(define (helper Prop)
  (cond [(var? Prop) (list (var-v Prop))]
        [(neg? Prop) (free-vars (neg-f Prop))]
        [(conj? Prop) (append (free-vars (conj-l Prop)) (free-vars (conj-r Prop)))]
        [else (append (free-vars (disj-l Prop)) (free-vars (disj-r Prop)))]))

(define zmienna1 (var "x"))
(define zmienna2 (var "y"))
(define zmienna3 (var "z"))
(define kon1 (conj zmienna1 zmienna2 )) ;x i y
(define neg1 (neg zmienna3)) ;~z
(define disj1 (disj kon1 neg1)) ;(x i y) i ~z
(define kon2 (conj kon1 disj1)) ;(x i y) i ((x i y) i ~z) -> (x y x y z)

(define (in? elem xs)
            (cond [(empty? xs) #f]
                  [(equal? elem (first xs)) #t]
                  [else (in? elem (rest xs))]))
      
  

(define (free-vars xs )
  (local [
          (define (it xs res)
            (if (empty? xs)
                res
                (it (rest xs) (cond [(in? (first xs) res) res]
                                    [else (cons (first xs) res)]))))]
    (it (helper xs) empty)))

;zadanie 8
(define (eval slownik prop)
  (cond [(conj? prop) (and (eval slownik (conj-l prop)) (eval slownik (conj-r prop)))]
        [(disj? prop) (or (eval slownik (disj-l prop)) (eval slownik (disj-r prop)))]
        [(neg? prop) (not (eval slownik (neg-f prop)))]
        [else (some-v (hash-ref slownik (var-v prop)))]))


(define example-tautology
    (disj
        (neg
            (conj
            (conj
                (disj
                    (neg (var "p"))
                    (var "q"))
                (disj
                    (neg (var "q"))
                    (var "r")))
                (disj
                    (var "p")
                    (var "q"))))
        (var "r")))



(define (tautology? prop)
  (local [
          (define (it acc xs)
          (if (empty? xs)
              (eval acc prop)
              (and (it (hash-set acc (first xs) #t) (rest xs))
                   (it (hash-set acc (first xs) #f) (rest xs)))))]
    (it (hash empty) (free-vars prop))))
