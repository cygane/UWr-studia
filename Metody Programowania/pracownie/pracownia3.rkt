#lang plait

(module+ test
  (print-only-errors #t))

;; abstract syntax -------------------------------

(define-type Op
  (add) (sub) (mul) (leq))

(define-type P
  (defP [b : (Listof D)] [t : E]))

(define-type D
  (funD [h : Symbol] [b : (Listof Symbol)] [e : E]))

(define-type E
  (numE [n : Number])
  (varE [x : Symbol])
  (opE [l : E] [op : Op] [r : E])
  (ifE [b : E] [l : E] [r : E])
  (letE [x : Symbol] [e1 : E] [e2 : E])
  (funE [e : Symbol] [b : (Listof E)]))

;; parse ----------------------------------------

(define (parseP [s : S-Exp]) : P
  (if (s-exp-match? `{define {ANY ...} for ANY} s)
      (defP
        (map parseD (s-exp->list (second (s-exp->list s))))
        (parseE (fourth (s-exp->list s))))
      (error 'parseP "wrong define for definition")))

(define (free-variables? [f : D]) : Boolean
  (let ([vs (funD-b f)] [body (funD-e f)])
    (not (foldr (lambda (x a) (and a (member x vs))) #t (find-fv body)))))

(define (find-fv [e : E]) : (Listof Symbol)
  (type-case E e
    [(numE n) '()]
    [(varE x) (list x)]
    [(opE l op r) (append (find-fv l) (find-fv r))]
    [(ifE b l r) (append (find-fv b) (append (find-fv l) (find-fv r)))]
    [(letE x e1 e2) (append (find-fv e1) (list-remove (find-fv e2) x))]
    [(funE e b) (foldr (lambda (x a) (append a (find-fv x))) '() b)]))

(define (list-remove [l : (Listof 'a)] [x : 'a]) : (Listof 'a)
  (cond
    ((empty? l) '())
    ((equal? (first l) x) (rest l))
    (else (cons (first l) (list-remove (rest l) x)))))

(define (parseD [s : S-Exp]) : D
  (let ([func-exp (funD
    (s-exp->symbol (second (s-exp->list s)))
    (map s-exp->symbol (s-exp->list (third (s-exp->list s))))
    (parseE (fourth (rest (s-exp->list s)))))])
    (if (free-variables? func-exp)
        (error 'parse-func "free variables")
        func-exp)))

(define (parseE [s : S-Exp]) : E
  (cond
    [(s-exp-match? `SYMBOL s)
     (varE (s-exp->symbol s))]
    [(s-exp-match? `{let SYMBOL be ANY in ANY} s)
     (letE (s-exp->symbol (second (s-exp->list s)))
           (parseE (fourth (s-exp->list s)))
           (parseE (sixth (s-exp->list s))))]
    [(s-exp-match? `NUMBER s)
     (numE (s-exp->number s))]
    [(s-exp-match? `{ifz ANY then ANY else ANY} s)
     (ifE (parseE (second (s-exp->list s)))
          (parseE (fourth (s-exp->list s)))
          (parseE (fourth (rest (rest (s-exp->list s))))))]
    [(s-exp-match? `{ANY SYMBOL ANY} s)
      (opE (parseE (first (s-exp->list s)))
           (parse-op (s-exp->symbol (second (s-exp->list s))))
           (parseE (third (s-exp->list s))))]
    [(s-exp-match? `{SYMBOL {ANY ...}} s)
     (funE (s-exp->symbol (first (s-exp->list s)))
          (map parseE (s-exp->list(second (s-exp->list s)))))]
    [else (error 'parseE "invalid input")]))

(define (parse-op [op : Symbol]) : Op 
  (cond
    [(eq? op '+) (add)]
    [(eq? op '-) (sub)]
    [(eq? op '*) (mul)]
    [(eq? op '<=) (leq)]
    [else (error 'parse "unknown operator")]))

(define (sixth xs)
 (first (rest (rest (rest (rest (rest xs)))))))

(module+ test
  (test (parseE `2)
        (numE 2))
  (test (parseE `{2 + 1})
        (opE (numE 2) (add) (numE 1)))
  (test (parseE `{3 * 4})
        (opE (numE 3) (mul) (numE 4)))
  (test (parseE `{{3 * 4} + 8})
        (opE (opE (numE 3) (mul) (numE 4))
             (add)
             (numE 8)))
  (test (parseE `{ifz (5 <= 6) then 1 else {3 + 4}})
        (ifE (opE (numE 5) (leq) (numE 6)) (numE 1) (opE (numE 3) (add) (numE 4))))
  (test/exn (parseE `{{+ 1 2}})
            "invalid input")
  (test/exn (parseE `{1 / 2})
            "unknown operator")
  (test (parseE `{let x be 1 in {x + 1}})
        (letE 'x (numE 1) (opE (varE 'x) (add) (numE 1)))))
 

;; binding

(define-type Val
  (valV [num : Value])
  (funV [xs : (Listof Symbol)] [e : E]))

(define-type Binding
  (bind [name : Symbol]
        [val : Val]))

;; environments

(define-type-alias Env (Listof Binding))

(define mt-env empty)

(define (extend-env [env : Env] [x : Symbol] [v : Val]) : Env
  (cons (bind x v) env))

(define (super-extend-env [env : Env] [ss : (Listof Symbol)] [vs : (Listof Val)]) : Env
  (if (and (empty? ss) (empty? vs))
      env
      (if (or (and (not (empty? ss)) (empty? vs)) (and (not (empty? vs)) (empty? ss)))
          (error 'super-extend-env "wrong number of arguments")
          (cons (bind (first ss) (first vs)) (super-extend-env env (rest ss) (rest vs))))))

(define (lookup-env [n : Symbol] [env : Env]) : Val
  (type-case (Listof Binding) env
    [empty (error 'lookup "unbound variable")]
    [(cons b rst-env) (cond
                        [(eq? n (bind-name b))
                         (bind-val b)]
                        [else (lookup-env n rst-env)])]))

;; eval --------------------------------------

(define-type-alias Value Number)

(define (<= x y)
  (if (or (< x y) (= x y))
      0
      42))

(define (op->proc [op : Op]) : (Value Value -> Value)
  (type-case Op op
    [(add) +]
    [(sub) -]
    [(mul) *]
    [(leq) <=]))

(define (evalP [x : P] [env : Env]) : Val
  (type-case P x
    [(defP b t)
     (let ([ds (map (lambda (p) (funD-h p)) b)])
       (let ([xs (map (lambda (p) (evalD p env)) b)])
       (eval t (super-extend-env env ds xs))))]))

(define (evalD [x : D] [env : Env]) : Val 
  (type-case D x
    [(funD h b e)
     (funV b e)]))

(define (eval [e : E] [env : Env]) : Val
  (type-case E e
    [(numE n) (valV n)]
    [(opE l o r) (valV ((op->proc o) (valV-num (eval l env)) (valV-num (eval r env))))]
    [(ifE b l r)
     (if (= (valV-num (eval b env)) 0)
         (eval l env)
         (eval r env))]
    [(varE x)
     (lookup-env x env)]
    [(letE x e1 e2)
     (let ([v1 (eval e1 env)])
       (eval e2 (extend-env env x v1)))]
    [(funE e b)
     (apply (lookup-env e env) (eval-sym b env) env)]))

(define (eval-sym [b : (Listof E)] [env : Env]) : (Listof Val)
  (map (lambda (x) (eval x env)) b))

(define (apply [f : Val] [b : (Listof Val)] [env : Env]) : Val
  (eval (funV-e f) (super-extend-env env (funV-xs f) b)))

(define (run [s : S-Exp]) : Value
  (valV-num (evalP (parseP s) mt-env)))

(run `{define
{[fun fact (n) = {ifz n then 1 else {n * {fact ({n - 1})}}}]}
for
{fact (5)}})
