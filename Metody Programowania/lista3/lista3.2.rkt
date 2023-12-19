#lang racket

(require rackunit)

(define (my-foldl f x xs)
  (define (it xs acc)
    (if (null? xs)
        acc
        (it (cdr xs) (f (car xs) acc))))
  (it xs x))

; (my-foldl f y '(x1 x2 x3))
; (f x3 (f x2 (f x1 y)))
; * '(2 3 4)
; (* 4 (* 3 (* 2 1)))
; rekursja ogonowa
;(my-foldr f y '(x1 x2 x3))
; (f x1 (f x2 (f x3 y)))
; * '(2 3 4)
;(* 2 (* 3 (* 4 1)))

(define (my-sum2 xs)
  (my-foldl + 0 xs))

(define (product xs)
  (my-foldl * 1 xs))

(check-equal? (product (list)) 1)
(check-equal? (product (list 3 4)) 12)
(check-equal? (product (list 1 )) 1)
(check-equal? (product (list 2 7)) 14)
