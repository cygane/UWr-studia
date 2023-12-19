#lang plait

;zadanie 7

(define-type Exp
      (exp-var [x : Symbol])
      (exp-num [x : Number])
      (exp-lambda [args : (Listof Symbol)] [app : Exp])
      (exp-app [function : Exp] [args : (Listof Exp)])
      (exp-if [condition : Exp] [if-true : Exp] [if-false : Exp])
      (exp-cond [cases : (Listof (Exp * Exp))])
      (exp-let [defs : (Listof (Symbol * Exp))] [body : Exp]))

;zadanie 8

(define (parse-Exp x)
  (cond
    [(s-exp-number? x) (exp-num (s-exp->number x))]
    [(s-exp-symbol? x) (exp-var (s-exp->symbol x))]
    [(s-exp-list? x)
     (let* ([xs (s-exp->list x)] [name (s-exp->symbol (first xs))])
       (cond
         [(equal? name 'lambda)
          (exp-lambda
           (map s-exp->symbol (s-exp->list (second xs)))
           (parse-Exp (third xs)))]
         [(equal? name 'app)
          (exp-app
           (parse-Exp (second xs))
           (map parse-Exp (s-exp->list (third xs))))]
         [(equal? name 'if)
          (exp-if
           (parse-Exp (second xs))
           (parse-Exp (third xs))
           (parse-Exp (fourth xs)))]
         [(equal? name 'cond)
          (exp-cond
           (map (lambda (y)
                  (let ([p (s-exp->list y)])
                    (pair (parse-Exp (first p)) (parse-Exp (second p)))))
                (s-exp->list (second xs))))]
         [(equal? name 'let)
          (exp-let
           (map (lambda (y)
                  (let ([p (s-exp->list y)])
                    (pair (s-exp->symbol (first p)) (parse-Exp (second p)))))
                (s-exp->list (second xs)))
           (parse-Exp (third xs)))]))]))


(parse-Exp `(cond ((1 (let ((x 1) (y 2) (z 3)) (app (lambda (x y z) (if x 1 2)) (1 1 1)))) (x 1))))