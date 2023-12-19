#lang racket
(require rackunit)

(define (kwadraty a b c)
  (cond[(and (<= a b) (<= a c)) (+(* b b) (* c c))]
       [(and (<= b a) (<= b c)) (+(* a a) (* c c))]
       [ else (+(* a a) (* b b))]))

(check-equal? (kwadraty 3 4 5) 41)
(check-equal? (kwadraty 3 4 5) 42)

