#lang racket

(define-struct matrix (a b c d) #:transparent)

(define m (make-matrix 1 2 3 4))
(define n (make-matrix 1 2 3 4))

(define (matrix-mult m n)
  (define x (+ (* (matrix-a m) (matrix-a n)) (* (matrix-b m) (matrix-c n))))
  (define y (+ (* (matrix-a m) (matrix-b n)) (* (matrix-b m) (matrix-d n))))
  (define z (+ (* (matrix-c m) (matrix-a n)) (* (matrix-d m) (matrix-c n))))
  (define w (+ (* (matrix-c m) (matrix-b n)) (* (matrix-d m) (matrix-d n))))
  (define iloczyn (make-matrix x y z w))
  iloczyn)

     
(define (matrix-id)
 (define id (make-matrix 1 0 0 1))
  id)

(define (matrix-expt m k)
  (define (it ma res k)
  (if (= k 1)
      res
      (it ma (matrix-mult res ma) (- k 1))))
  (it m m k))
        
(define (fib-matrix k)
  (cond [(= k 0) 0]
        [(= k 1) 1]
        [(= k 2) 1]
        [else
         (define fib-empty (make-matrix 1 1 1 0))
         (matrix-a (matrix-expt fib-empty (- k 1)))]))

(fib-matrix 8)