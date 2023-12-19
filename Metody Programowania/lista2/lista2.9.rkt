#lang racket

(define (minimum xs)
     (define (it l min)
       (if (null? l)
            min
            (it (cdr l) (cond [(< min (car l)) min]
                              [else (car l)]))))
     (it xs (car xs)))

(define (select xs)
  (define mini (minimum xs))
  (list* mini (remv mini xs)))

(define (my-reverse xs)
  (define (it xs ys)
    (if (null? xs)
        ys
        (it (cdr xs) (cons (car xs) ys))))
  (it xs null))

(define (select-sort xs)
  (define (it l res)
     (if (= (length l) 1)
          (my-reverse (list* (first l) res))
          (it (select (rest l)) (list* (first l) res))))
    (it (select xs) (list)))
  