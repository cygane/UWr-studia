#lang plait


(define (apply f x) (f x))
;(('a -> 'b) 'a -> 'b)
(define (compose f g) (lambda (x) (f (g x))))
;(('a -> 'b) ('c -> 'a) -> ('c -> 'b))
(define (flip f) (lambda (x y) (f y x)))
;(('a 'b -> 'c) -> ('b 'a -> 'c))

;zapytac                                     a b
(define (curry f) (lambda (x) (lambda (y) (f x y))))
;(('a 'b -> 'c) -> ('a -> ('b -> 'c)))
; (f x y) = c

(curry compose)
;(curry) : (('a 'b -> 'c) -> ('a -> ('b -> 'c)))
;(compose) : ;(('x -> 'y) ('z -> 'x) -> ('z -> 'y))
; a: ('x -> 'y)
; b: ('z -> 'x)
; c: ('z -> 'y)
; zatem (('x -> 'y) -> (('z -> 'x) -> ('z -> 'y)))

((curry compose) (curry compose))
;(curry compose) : (('x -> 'y) -> (('z -> 'x) -> ('z -> 'y)))
;(curry compose) : (('a -> 'b) -> (('c -> 'a) -> ('c -> 'b)))
; x: ('a -> 'b)
; y: (('c -> 'a) -> ('c -> 'b))
; zatem (('z -> ('a -> 'b)) -> ('z -> (('c -> 'a) -> ('c -> 'b))))

((curry compose) (curry apply))
;(curry compose) : (('a -> 'b) -> (('c -> 'a) -> ('c -> 'b)))
; (curry) : (('a 'b -> 'c) -> ('a -> ('b -> 'c)))
; (apply) : (('x -> 'y) 'x -> 'y)
; (curry apply) :
; a : ('x -> 'y)
; b: 'x
; c : 'y
; zatem (('x -> 'y) -> ('x -> 'y))
; a: ('x -> 'y)
; b: ('x -> 'x -> 'y)
; zatem (('c -> ('x -> 'y)) -> ('c -> ('x -> 'y)))

((curry apply) (curry compose))
; (curry apply) : (('x -> 'y) -> ('x -> 'y))
; (curry compose) : (('a -> 'b) -> (('c -> 'a) -> ('c -> 'b)))
; x: ('a -> 'b)
; y: (('c -> 'a) -> ('c -> 'b))
; zatem (('a -> 'b) -> (('c -> 'a) -> ('c -> 'b)))

(compose curry flip)
; (compose) : ;(('k -> 'l) ('m -> 'k) -> ('m -> 'l))
; (curry) : (('a 'b -> 'c) -> ('a -> ('b -> 'c)))
; (flip) : (('x 'y -> 'z) -> ('y 'x -> 'z))
; k: ('a 'b -> 'c)
; l: ('a -> ('b -> 'c))
; m: ('x 'y -> 'z)
; k : ('y 'x -> 'z)
; z tego : a : y, b: x, c: z
; zatem (('x 'y -> 'z) -> ('y -> ('x -> 'z)))

(lambda (x) (lambda (y) (lambda (z) ((x z) (y z)))))
;                                a      a     a     
; (x z), x : a -> (b -> c)
; (y z) = b, y : a -> b
; zatem ((a -> (b -> c)) -> ((a -> b) -> (a -> c)))
 


