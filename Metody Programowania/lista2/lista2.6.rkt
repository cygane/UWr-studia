#lang racket

(define (maximum xs)
     (define (it l max)
       (if (null? l)
            max
            (it (cdr l) (cond [(> max (car l)) max]
                              [else (car l)]))))
     (it xs -inf.0))
  