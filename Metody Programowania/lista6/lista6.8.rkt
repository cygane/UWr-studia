#lang plait

(define (sorted? xs)
  (cond
    [(empty? xs) #t]
    [(empty? (rest xs)) #t]
    [else (and (<= (first xs) (second xs))
               (sorted? (rest xs)))]))

(define (insert x xs)
  (cond
    [(empty? xs) (list x)]
    [(<= x (first xs)) (cons x xs)]
    [else (cons (first xs) (insert x (rest xs)))]))


(sorted? '(1 4 8 9))
(insert 3 '(1 2 5 9))
  