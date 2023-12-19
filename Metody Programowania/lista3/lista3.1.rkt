#lang racket

'((car (a . b)) (* 2))
; glowa tego wyrazenia to (car (a . b))
; ' przed procedurą sprawia, że racket nie traktuje procedury jako procedurę
(list (list 'car (cons 'a 'b)) (list '* 2))


`(,(car '(a . b)) ,(* 2))
; , mówi, że na chwilę obliczamy procedurę (wyskakujemy z przecinka)
(list 'a 2)


'((+ 1 2 3) (cons) (cons a b))
(list (list '+ 1 2 3) (list 'cons) (list 'cons 'a 'b))

; (list 1 2) == (cons 1 (cons 2 '()))