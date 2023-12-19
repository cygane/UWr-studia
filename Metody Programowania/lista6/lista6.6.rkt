#lang plait

(define-type (Formula 'v)
  (var [var : 'v])
  (neg [f : (Formula 'v)])
  (conj [l : (Formula 'v)] [r : (Formula 'v)])
  (disj [l : (Formula 'v)] [r : (Formula 'v)]))

(define (to-nnf fi)
  (cond  [(var? fi) fi]
         [(and (neg? fi)
               (var? (neg-f fi)))
          fi]
         [(and (neg? fi)
               (neg? (neg-f fi)))
          (to-nnf (neg-f(neg-f fi)))]
         [(and (neg? fi)
               (conj? (neg-f fi)))
          (disj (to-nnf (neg (conj-l (neg-f fi)))) (to-nnf (neg (conj-r (neg-f fi)))))]
         [(and (neg? fi)
               (disj? (neg-f fi)))
               (conj (to-nnf (neg (disj-l (neg-f fi)))) (to-nnf (neg (disj-r (neg-f fi)))))]
         [(conj? fi) (conj (to-nnf (conj-l fi)) (to-nnf (conj-r fi)))]
         [(disj? fi) (disj (to-nnf (disj-l fi)) (to-nnf (disj-l fi)))]))

(define f (conj (var 'p) (neg (disj (var 'q) (var 'r)))))
;  p i ~(q lub r)
;-> p i (~q i ~r)
;(to-nnf f)

(define (eval-formula sig fi)
  (cond [(var? fi) (sig fi)]
        [(neg? fi) (not (eval-formula sig (neg-f fi)))]
        [(conj? fi) (and (eval-formula sig (conj-l fi)) (eval-formula sig (conj-r fi)))]
        [(disj? fi) (or (eval-formula sig (disj-l fi)) (eval-formula sig (disj-r fi)))]))


(define (sigma c)
  (cond [(equal? c (var 'p)) #t]
        [(equal? c (var 'q)) #f]))

(define phi (disj (neg (var 'p)) (var 'q)))
; ~p lub q

(define nnf-phi (to-nnf phi))

(eval-formula sigma nnf-phi)



