#lang racket

(define (my-reverse xs)
  (define (it xs ys)
    (if (null? xs)
        ys
        (it (cdr xs) (cons (car xs) ys))))
  (it xs null))

(define (my-append xs ys)
      (cons xs ys))

(define (split xs)
  (define (it l ls n)
     (if (= n 0)
         (my-append (my-reverse ls) l)
         (it (rest l) (my-append (first l) ls) (- n 1))))
  (it xs (list) (round(/(length xs) 2))))

(define (insert n xs)
  (if (null? xs)
      (list n)
      (if (< n (car xs))
          (cons n xs)
          (cons (car xs) (insert n (cdr xs))))))

(define (merge xs ys)
   (define (it l res)
     (if  (null? l)
         res
         (it (rest l) (insert (first l) res))))
  (it xs ys))

(define (merge-sort xs)
   (if (< (length xs) 2)
        xs
       (merge (merge-sort (first (split xs))) (merge-sort(rest(split xs))))))
              