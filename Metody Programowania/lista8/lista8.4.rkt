#lang plait

(define-type Op
  (op-add) (op-mul) (op-sub) (op-div))

(define-type Exp
  (exp-number [n : Number])
  (exp-op [op : Op] [e1 : Exp] [e2 : Exp]))

(define (parse-Op s)
  (let ([sym (s-exp->symbol s)])
  (cond
    [(equal? sym '+) (op-add)]
    [(equal? sym '-) (op-sub)]
    [(equal? sym '*) (op-mul)]
    [(equal? sym '/) (op-div)])))

(define (evall [s : S-Exp]) : Number
  (cond
    [(s-exp-number? s) (s-exp->number s)]
    [(s-exp-list? s)
     (let ([xs (s-exp->list s)])
       ((eval-op(parse-Op (first  xs)))
               (evall (second xs))
               (evall (third  xs))))]))

(define (eval-op [op : Op]) : (Number Number -> Number)
  (type-case Op op 
    [(op-add) +]
    [(op-sub) -]
    [(op-mul) *]
    [(op-div) /]))

(define (eval e)
  (type-case Exp e
    [(exp-number n)    n]
    [(exp-op op e1 e2)
     ((eval-op op) (eval e1) (eval e2))]))

(define x `(+ 2 3))
