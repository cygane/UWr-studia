#lang racket

((lambda (x y) (+ x (* x y))) 1 2)
;(+ 1 (* 1 2)) 

((lambda (x) x) (lambda (x) x))
;(lambda (x) x)
; procedura

((lambda (x) (x x)) (lambda (x) x))
;((lambda (x) x) (lambda (x) x))
;(lambda (x) x)
; procedura

((lambda (x) (x x)) (lambda (x) (x x)))
;((lambda (x) (x x) (lambda (x) (x x))
;i tak w nieskonczonosc