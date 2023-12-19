#lang racket

(define (elem x xs)
  (cond [(null? xs) #f]
        [(equal? (car xs) x) #t]
        [else (elem x (cdr xs))]))
      