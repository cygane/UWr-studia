#lang racket

(define-struct leaf () #:transparent)
(define-struct node (l elem r) #:transparent)


(define tree (node
(node (leaf) 2 (leaf))
5
(node (node (leaf) 6 (leaf))
8
(node (leaf) 9 (leaf)))))

(define example-tree
  (node (node (leaf) 1 (leaf))
        2
        (node (node (leaf) 0 (leaf))
              4
              (leaf))))

(define (fold-tree f x t)
  (if (leaf? t)
      x
      (f (fold-tree f x (node-l t)) (node-elem t) (fold-tree f x (node-r t)))))

(define (tree-sum t)
  (fold-tree + 0 t))

(define (tree-flip t)
  (fold-tree (lambda (x y z) (node z y x)) (leaf) t))

(define (tree-height t)
  (fold-tree (lambda (x y z) (max  (+ 1 x) (+ 1 z))) 0 t))

(define (flatten t)
  (fold-tree (lambda (x y z) (append x (cons y z))) null t))

(define (flatten-r t)
  (fold-tree (lambda (x y z) (append z (cons y x))) null t))

(define (tree-span t)
  (list (car (flatten t)) (car (flatten-r t)))) 





