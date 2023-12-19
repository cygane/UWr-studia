#lang plait


(define-type Op
  (op-add) (op-mul) (op-sub) (op-div) (op-pow))

(define-type Op-un
  (op-opp) (op-fac))

(define-type Exp
  (exp-number [n : Number])
  (exp-op [op : Op] [e1 : Exp] [e2 : Exp])
  (exp-op-un [op : Op-un] [e1 : Exp]))

(define (^ a b)
  (it a b 1))

(define (it a b res)
  (if (= b 0)
      res
      (it a (- b 1) (* res a))))

(define (! a)
  (if (= a 0)
      1
      (* a (! (- a 1)))))

(define (_ a)
  (- 0 a))

(define (parse-Op s)
  (let ([sym (s-exp->symbol s)])
  (cond
    [(equal? sym '+) (op-add)]
    [(equal? sym '-) (op-sub)]
    [(equal? sym '*) (op-mul)]
    [(equal? sym '/) (op-div)]
    [(equal? sym '^) (op-pow)]
    )))

(define (parse-Op-un s)
  (let ([sym (s-exp->symbol s)])
  (cond
    [(equal? sym '_) (op-opp)]
    [(equal? sym '!) (op-fac)])))

(define (length x)
  (itt x 0))

(define (itt x res)
  (if (empty? x)
      res
      (itt (rest x) (+ 1 res))))

(define (parse-Exp s)
  (cond
    [(s-exp-number? s) (exp-number (s-exp->number s))]
    [(s-exp-list? s)
     (let ([xs (s-exp->list s)])
       (cond
          [(= (length xs) 2)
          (exp-op-un (parse-Op-un (first  xs))
                     (parse-Exp (second xs)))]
          [else (exp-op (parse-Op  (first  xs))
               (parse-Exp (second xs))
               (parse-Exp (third  xs)))]))]))



(define (eval-op op)
  (type-case Op op
    [(op-add) +]
    [(op-sub) -]
    [(op-mul) *]
    [(op-div) /]
    [(op-pow) ^]))


(define (eval-op-un op)
  (type-case Op-un op
    [(op-opp) _]
    [(op-fac) !]))

(define (eval e)
  (type-case Exp e
    [(exp-number n)    n]
    [(exp-op-un op e1)
     ((eval-op-un op) (eval e1))]
    [(exp-op op e1 e2)
     ((eval-op op) (eval e1) (eval e2))]))

(define x `(_ (^ (+ (- 2 3) (* 2 5)) 2)))