#lang racket

(define-struct leaf () #:transparent)
(define-struct node (l elem r) #:transparent)

(define (insert-bst x t)
  (cond [(leaf? t) (node (leaf) x (leaf))]
        [(node? t)
         (cond [(< x (node-elem t))
                 (node (insert-bst x (node-l t))
                       (node-elem t)
                       (node-r t))]
                [else
                 (node (node-l t)
                       (node-elem t)
                       (insert-bst x (node-r t)))])]))

(define (fold-tree f x t)
  (if (leaf? t)
      x
      (f (fold-tree f x (node-l t)) (node-elem t) (fold-tree f x (node-r t)))))

(define (flatten t)
  (fold-tree (lambda (x y z) (append x (cons y z))) null t))

(define (treesort xs)
  (define (it x xs)
    (if (null? xs)
        (flatten x)
     (it (insert-bst (car xs) x) (cdr xs))))
  (it (leaf) xs))
    
