#lang racket

(define (negatives n)
  (build-list n (lambda (x) (* -1 (+ x 1)))))

(define (reciprocals n)
  (build-list n (lambda (x) (/ 1 (+ x 1)))))

(define (evens n)
  (build-list n (lambda (x) (* 2 (+ x 1)))))
  
(define (identityM n)
  (define s (- n 1))
  (define (it acc res s)
    (if (equal? s acc)
        (reverse res)
     (it (+ 1 acc) (list* (append (build-list (+ 1 acc) (lambda (x) (- x x))) (list 1)
               (build-list (- s (+ 1 acc)) (lambda (x) (- x x)))) res) s)))
  (it -1 (list) s))

