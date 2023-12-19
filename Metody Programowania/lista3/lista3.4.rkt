#lang racket

(require rackunit)

(define (square x)
  (* x x))

(define (inc x)
  (+ x 1))

(define (my-compose f g)
  (lambda (x)
    (f (g x))))

(check-equal? ((my-compose square inc) 5) 36)
(check-equal? ((my-compose inc square) 5) 26)

; ((my-compose square inc) 5) -> (square (inc 5)) -> (square 6) -> 36
; ((my-compose inc square) 5) -> (inc (square 5)) -> (inc 25) -> 26