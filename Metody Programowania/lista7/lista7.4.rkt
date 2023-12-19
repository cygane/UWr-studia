#lang racket

(parametric->/c [a b] (-> a b a))
; pozytywne: a2
; negatywne: a1, b

(define/contract (f1 x y)
  (parametric->/c [a b] (-> a b a))
  x)
  
(parametric->/c [a b c] (-> (-> a b c) (-> a b) a c))
; pozytywne: a1, a2, b1, c2
; negatywne: b2, c1, a3

(define/contract (f2 a b c)
  (parametric->/c [a b c] (-> (-> a b c) (-> a b) a c))
  (a c (b c) ))

(parametric->/c [a b c] (-> (-> b c) (-> a b) (-> a c)))
; pozytywne: b1, a1, c2
; negatywne: c1, b2

(define/contract (f4 f g x)
 (parametric->/c [a b c] (-> (-> b c) (-> a b) (-> a c)))
  ((lambda (x) (cons (f x) (g x))) x))


(parametric->/c [a] (-> (-> (-> a a) a) a))
; pozytywne: a2, a4
; negatywne: a1, a3

(define/contract (f3 f)
  (parametric->/c [a] (-> (-> (-> a a) a) a))
  (f (lambda (x) (f (lambda (y) x)))))

