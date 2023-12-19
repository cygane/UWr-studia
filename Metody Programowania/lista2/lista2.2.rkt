#lang racket

(define (fib n)
  (if (= n 0) 0
      (if (= n 1) 1
      (+ (fib (- n 1)) (fib (- n 2))))))

(define (fib-iter n)
  (define (it n acc1 acc2)
    (if (= n 1)
        acc2
        (it (- n 1) acc2 (+ acc1 acc2) )))
      (it n 0 1))
  
; 0 1 1 2 3
; fib:
; (fib 4) -> (+ (fib 3) (fib 2)) -> (+ (+ (fib 1) + (fib 2)) (+ (fib 0) (fib 1)))
; -> (+ (+ 1 (fib 1) (fib 0)) (+ 0 1)) -> (+ 1 1 0 0 1) = 3

; fib-iter:
; (fib-iter 4) -> (it 4 0 1) -> (it 3 1 1) -> (it 2 1 2) -> (it 1 2 3) = 3

