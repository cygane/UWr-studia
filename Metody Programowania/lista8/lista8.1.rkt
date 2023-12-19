#lang racket

;zadanie 1

(define (end xs ys) 
  (if (equal? (mcdr xs) '()) 
      (set-mcdr! xs ys)
      (end (mcdr xs) ys)))

(define (cycle! xs)
    (if (null? xs)
      '()
       (end xs xs)))

(define x (mcons 1( mcons 2 (mcons 3 '()))))
; po mreverse (mcons 3 (mcons 2 (mcons 1 '())))

;zadanie 2

(define (change xs prev)
  (if (null? xs)
      prev
      (let
         ([next (mcdr xs)])
        (set-mcdr! xs prev)
        (change next xs))
      ))
    

(define (mreverse! xs)
  (if (null? xs)
      '()
      (change xs '())))

(define (last xs)
  (if (null? (mcdr xs))
      xs
      (last (mcdr xs))))

(define y (last x))

;zadanie 3

(provide
 dequeue?
 nonempty-dequeue?
 (contract-out
   [dequeue-empty? (-> dequeue? boolean?)]
   [make-dequeue   (-> dequeue?)]
   [dequeue-push-front   (-> dequeue? any/c void?)]
   [dequeue-push-back   (-> dequeue? any/c void?)]
   [dequeue-pop-front    (-> dequeue? any/c)]
   [dequeue-pop-back    (-> dequeue? any/c)]
   [dequeue-join   (-> nonempty-dequeue? nonempty-dequeue? void?)]))

(struct mqueue
  ([front #:mutable]
   [back  #:mutable]))

(define (mqueue-empty? q)
  (and (null? (mqueue-front q))
       (null? (mqueue-back  q))))

(define (nonempty-mqueue? q)
  (and (mqueue? q) (mpair? (mqueue-front q))))

(define (make-mqueue)
  (mqueue null null))

(define (mqueue-push q x)
  (define p (mcons x null))
  (if (mqueue-empty? q)
      (set-mqueue-front! q p)
      (set-mcdr! (mqueue-back q) p))
  (set-mqueue-back! q p))

(define/contract (mqueue-pop q)
  (-> nonempty-mqueue? any/c)
  (define p (mqueue-front q))
  (set-mqueue-front! q (mcdr p))
  (if (null? (mcdr p))
      (begin
        (set-mqueue-back! q null)
        (mcar p))
      (mcar p)))

(define (mqueue-join q1 q2)
  (set-mcdr! (mqueue-back q1) (mqueue-front q2))
  (set-mqueue-back! q1 (mqueue-back q2))
  (set-mqueue-front! q2 null)
  (set-mqueue-back!  q2 null))

;listy dwukierunkowe

(struct elem
  ([prev #:mutable]
   [val #:mutable]
   [next #:mutable]))

(struct dequeue
  ([front #:mutable]
   [back #:mutable]))


(define (make-dequeue)
  (dequeue null null))

(define (dequeue-empty? q)
  (null? (dequeue-front q)))

(define (nonempty-dequeue? q)
  (elem? (dequeue-front q)))

(define (dequeue-push-front q x)
  (define p (elem (null x (dequeue-front q))))
  (if (dequeue-empty? q)
      (set-dequeue-back! q p)
      (set-elem-prev! (dequeue-front q) p))
  (set-dequeue-front! q p))

(define (dequeue-push-back q x)
  (define p (elem (dequeue-back q) x null))
  (if (dequeue-empty? q)
     (set-dequeue-front! q p)
     (set-elem-next! (dequeue-back q) p))
  (set-dequeue-back! q p))

(define/contract (dequeue-pop-front q)
  (-> nonempty-dequeue? any/c)
  (if (eq? (dequeue-front q) (dequeue-back q))
        (set-dequeue-back! q null)
        (set-elem-prev! (elem-next (dequeue-front q)) null))
      (set-dequeue-front! q (elem-next (dequeue-front q))))

(define/contract (dequeue-pop-back q)
  (-> nonempty-dequeue? any/c)
  (if (eq? (dequeue-front q) (dequeue-back q))
        (set-dequeue-front! q null)
        (set-elem-prev! (elem-next (dequeue-back q)) null))
      (set-dequeue-back! q (elem-next (dequeue-back q))))

(define/contract (dequeue-join q1 q2)
  (-> nonempty-dequeue? any/c)
  (set-elem-next! (dequeue-back q1) (dequeue-front q2))
  (set-elem-prev! (dequeue-front q2) (dequeue-back q1))
  (set-dequeue-back! q1 (dequeue-back q2))
  (set-dequeue-front! q2 null)
  (set-dequeue-back! q2 null))






  