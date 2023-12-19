#lang racket


;(let ([x 3]) (+ x y)) -> zmienna x związana, y wolna, + wolna

;(let ([x 1] [y (+ x 2)]) (+ x y)) -> pierwsza zmienna x związana, y związana,
; drugie x niezwiązane, + wolna

;(let ([x 1])
;   (let ([y (+ x 2)])
;     (* x y))) -> wszystkie zmienne sa zwiazane, + wolna, * wolna

;(define (f x y)
;       (* x y z) -> zmienna z jest niezwiazana, * wolna


;(define (f x)
;     (define (g y z)
;        (* x y z))
;    (f x x x)) -> arnosc funkcji sie nie zgadza, * wolna



  