#lang plait

;(('a 'b 'c 'b -> 'b)  procedura dla węzła
;('a -> 'b) procedura dla liścia
;('a 'c -> 'a) akumulacja dla prawej gałęzi
;('a 'c -> 'a) akumulacja dla lewej gałęzi
;'a            wartość akumulatora
;(Tree 'c) ->
;'b)

(define-type (Tree 'a)
  (leaf)
  (node [l : (Tree 'a)] [elem : 'a] [r : (Tree 'a)]))

(define (fold-tree p_we p_li acc_l acc_p acc tree)
  (if (leaf? tree)
      (p_li acc)
      (p_we
                acc
                (fold-tree p_we p_li acc_l acc_p (acc_l acc (node-elem tree)) (node-l tree))
                (node-elem tree)
                (fold-tree p_we p_li acc_l acc_p (acc_p acc (node-elem tree)) (node-r tree)))))


(define (sum-paths t)
  (fold-tree (lambda (a b c d) (node b (+ a c) d))
             (lambda (x) (leaf))
             (lambda (x y) (+ x y))
             (lambda (x y) (+ x y))
             0
             t))

(define example-tree
  (node (node (leaf) 1 (leaf))
        2
        (node (leaf)
              3
              (node (leaf) 4 (leaf)))))

(define ex
  (node (node (leaf) 3 (leaf))
        2
        (node (leaf)
              3
              (node (leaf) 4 (leaf)))))


(define (bst? t)
  (fold-tree
  (lambda (a b c d) (and b (> c (fst a)) (< c (snd a) ) d ))
  (lambda (x) #t)
  (lambda (x y) (pair (fst x) y))  
  (lambda (x y) (pair y (snd x))  )
  (pair -inf.0 +inf.0)
  t))

                
                
      