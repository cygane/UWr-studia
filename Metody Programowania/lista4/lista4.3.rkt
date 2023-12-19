#lang racket

(define-struct leaf () #:transparent)
(define-struct node (l elem r) #:transparent)

(define (fold-tree f x t)
  (if (leaf? t)
      x
     (f (fold-tree f x (node-l t)) (node-elem t) (fold-tree f x (node-r t))))) 

(define (flatten t)
  (fold-tree (lambda (x y z) (append x (cons y z))) null t))

(define (sorted xs)
  (define (it l p)
    (if (or (null? l) (equal? p #f) (null? (rest l)))
        p
        (it (rest l) (cond [(<(first l) (first(rest l))) #t]
                           [(=(first l) (first(rest l))) #t]
                           [else #f]))))
  (it xs #t))

(define t (node
(node (leaf) 2 (leaf))
5
(node (node (leaf) 6 (leaf))
8
(node (leaf) 9 (leaf)))))

(define (bst? t)
  (sorted (flatten t)))

(define (sum-paths t)
  (define (it acc t)
    (if (leaf? t)
        t
        (node (it (+ acc (node-elem t)) (node-l t))
              (+ acc (node-elem t))
              (it (+ acc (node-elem t)) (node-r t)))))
    (it 0 t))