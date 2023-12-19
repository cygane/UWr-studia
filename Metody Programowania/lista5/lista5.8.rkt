#lang plait

;hash : ((Listof ('a * 'b)) -> (Hashof 'a 'b))
;hash-ref : ((Hashof 'a 'b) 'a -> (Optionof 'b))
;hash-set : ((Hashof 'a 'b) 'a 'b -> (Hashof 'a 'b))

(define-type Prop
(var [v : String])
(conj [l : Prop] [r : Prop])
(disj [l : Prop] [r : Prop])
(neg [f : Prop]))

(define (eval slownik prop)
  (cond [(conj? prop) (and (eval slownik (conj-l prop)) (eval slownik (conj-r prop)))]
        [(disj? prop) (or (eval slownik (disj-l prop)) (eval slownik (disj-r prop)))]
        [(neg? prop) (not (eval slownik (neg-f prop)))]
        [else (some-v (hash-ref slownik (var-v prop)))]))

(define zmienna1 (var "x"))
(define zmienna2 (var "y"))
(define zmienna3 (var "z"))
(define kon1 (conj zmienna1 zmienna2 )) ;x i y
(define neg1 (neg zmienna3)) ;~z
(define disj1 (disj kon1 neg1)) ;(x i y) lub ~z
(define kon2 (conj kon1 disj1)) ;(x i y) i ((x i y) lub ~z) -> (x y x y z)

(define slo (hash (list (pair "x" #t) (pair "y" #f) (pair "z" #f))))
