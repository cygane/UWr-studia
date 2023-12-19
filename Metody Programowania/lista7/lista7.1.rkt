#lang plait

(define-type (2-3-tree 'v)
  (leaf)
  (2-node [elem : 'v] [l : (2-3-tree 'v)] [r : (2-3-tree 'v)])
  (3-node [elem1 : 'v] [elem2 : 'v] [l : (2-3-tree 'v)] [mid : (2-3-tree 'v)] [r : (2-3-tree 'v)]))

(define (height root)
     (cond [(leaf? root) 0]
           [(2-node? root) (if
                            (= (height (2-node-l root)) (height (2-node-r root))) (+ (height (2-node-l root)) 1)
                            -1)]
           [(3-node? root) (if
                            (and (= (height (3-node-l root)) (height (3-node-r root)))
                                    (= (height (3-node-l root)) (height (3-node-mid root))))
                                 (+ (height (3-node-l root)) 1)
                            -1)]))

(define (good? root min max)
  (cond
    [(leaf? root) #t]
    [(2-node? root) (if
                     (and (> (2-node-elem root) min) (< (2-node-elem root) max))
                     (and (good? (2-node-l root) min (2-node-elem root)) (good? (2-node-r root) (2-node-elem root) max))
                     #f
                     )]
    [(3-node? root) (if
                     (and (> (3-node-elem1 root) min) (< (3-node-elem1 root) max) (> (3-node-elem2 root) min) (< (3-node-elem2 root) max))
                     (and (good? (3-node-l root) min (3-node-elem1 root)) (good? (3-node-mid root) (3-node-elem1 root) (3-node-elem2 root)) (good? (3-node-r root) (3-node-elem2 root) max))
                      #f)]))

(define (2-3-t? t)
  (and (not (= -1 (height t))) (good? t -inf.0 +inf.0)))
           
(define drzewo (3-node  5 8
                    (3-node 1 3 (leaf) (leaf) (leaf))
                    (2-node 6 (leaf) (leaf))
                    (3-node 9 10 (leaf) (leaf) (leaf))))

(define drzewo2 (3-node  5 8
                    (3-node 1 3 (2-node 0 (leaf) (leaf)) (leaf) (leaf))
                    (2-node 6 (leaf) (leaf))
                    (3-node 9 10 (leaf) (leaf) (leaf))))

(define drzewo3 (3-node  5 8
                    (3-node 1 6 (leaf) (leaf) (leaf))
                    (2-node 6 (leaf) (leaf))
                    (3-node 9 10 (leaf) (leaf) (leaf))))
                               
   


  