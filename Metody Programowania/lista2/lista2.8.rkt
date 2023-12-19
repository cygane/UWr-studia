#lang racket

(define (sorted xs)
  (define (it l p)
    (if (or (null? l) (equal? p #f) (null? (rest l)))
        p
        (it (rest l) (cond [(<(first l) (first(rest l))) #t]
                           [(=(first l) (first(rest l))) #t]
                           [else #f]))))
  (it xs #t))
                           
                           
        