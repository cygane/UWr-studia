#lang racket

(define (suffixes1 xs)
  (define (it before res)
    (if (empty? before)
        (reverse (cons empty res))
        (it (rest before) (cons before res))))
  (it xs empty))

(define/contract (suffixes xs)
  (parametric->/c [a] (-> (listof a) (listof (listof a))))
  (cond
    [(empty? xs) empty]
    [else (cons xs (suffixes (rest xs)))]))

(define lista (range 3000))



(define start (current-inexact-milliseconds))
(define x (suffixes lista))
(- (current-inexact-milliseconds) start)

(define start2 (current-inexact-milliseconds))
(define y (suffixes1 lista))
(- (current-inexact-milliseconds) start2)
