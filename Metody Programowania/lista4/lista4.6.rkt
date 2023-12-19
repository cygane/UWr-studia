#lang racket

(define-struct leaf () #:transparent)
(define-struct node (l elem r) #:transparent)

(define t (node
(node (leaf) 2 (leaf))
5
(node (node (leaf) 6 (leaf))
8
(node (leaf) 9 (leaf)))))

(define (fold-tree f x t)
  (if (leaf? t)
      x
      (f (fold-tree f x (node-l t)) (node-elem t) (fold-tree f x (node-r t)))))

(define (flatten t)
  (fold-tree (lambda (x y z) (append x (cons y z))) null t))


(define (flatten-r t)
  (fold-tree (lambda (x y z) (append z (cons y x))) null t))

(define (tree-span t)
  (cons (car (flatten t)) (car (flatten-r t))))


;(define (delete x t)
;  (cond [(leaf? t) (leaf)]
;        [(= x (node-elem t)) (node (node-l t) (car (tree-span (node-r t))) (node-r t))]
;        [(> x (node-elem t)) (node (node-l t) (node-elem t)(delete x (node-r t)))]
;        [else (node (delete x (node-l t)) (node-elem t) (node-r t))]))

;(define (delete x t)
;  (cond [(leaf? t) (leaf)]
;        [(= x (node-elem t)) (cond [(not(leaf? (node-r t))) (node (node-l t) (car (tree-span (node-r t))) (delete (car (tree-span (node-r t))) (node-r t)))]
;                                   [(not(leaf? (node-l t))) (node (delete (car (tree-span (node-l t))) (node-l t)) (car (tree-span (node-l t))) (node-r t))]
;                                   [else (node (node-l t) (delete (car (tree-span (node-r t))) (node-r t)))])]
;        [else (node (node-l t) (node-elem t) (delete x (node-r t)))]))

(define (delete x t)
  (cond [(leaf? t) (leaf)]
        [(= x (node-elem t))
         (cond[(leaf? (node-r t))(node-l t)]
              [(leaf? (node-l t))(node-r t)]
              [else (node
                     (node-l t)
                     (car (tree-span (node-r t)))
                     (delete (car (tree-span (node-r t))) (node-r t)))])]
        [(< x (node-elem t)) (node
                              (delete x (node-l t))
                              (node-elem t)
                              (node-r t))]
        [else                (node
                              (node-l t)
                              (node-elem t)
                              (delete x (node-r t)))]))
                             
  