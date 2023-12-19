#lang plait

;zadanie 1

(define (f1 x y) x)
;('a 'b -> 'a)

(define (f2 a b c)
  (a c (b c) ))
;a: a,b -> c
;c: a
;b: a-> b
;(('a 'b -> 'c) ('a -> 'b) 'a -> 'c)


;zapytac się 
(define (f3 f)
  (f (lambda (x) (f (lambda (y) x)))))
;                            b  a
; f : (b -> a) -> c
; lam x : a -> c
; f2 : (a -> c) -> c
; b = a = c
; czyli f: (a -> a) -> a
; zatem (((a -> a) -> a) -> a)
;((('a -> 'a) -> 'a) -> 'a)


;(('a -> 'b) ('a -> 'c) -> ('a -> ('b * 'c)))
(define (f4v1 f g)
  (lambda (a) (pair (f a) (g a))))


(define (f5 o a)
  (if (none? (o a))
          '()   
    (cons (snd (some-v (o a))) (f5 o (fst (some-v (o a)))))))
;(('a -> (Optionof ('a * 'b))) 'a -> (Listof 'b))
; o:a
; a:b
 

















