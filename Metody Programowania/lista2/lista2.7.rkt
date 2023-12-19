#lang racket
(define (my-reverse xs)
  (define (it xs ys)
    (if (null? xs)
        ys
        (it (cdr xs) (cons (car xs) ys))))
  (it xs null))

(define (my-append xs ys)
      (cons xs ys))

 
(define (suffixes xs)
   (define (it l ls )
     (if (null? l)
         (my-reverse (my-append (list) ls))
         (it (rest l) (my-append l ls) )))
  (it xs (list)))