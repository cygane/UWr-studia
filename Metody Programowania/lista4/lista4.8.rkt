#lang racket
(require rackunit)

(define-struct ord (val priority) #:transparent)
(define-struct hleaf ())
(define-struct hnode (elem rank l r) #:transparent)

(define (make-node elem heap-a heap-b)
  (if (< (rank heap-a) (rank heap-b))
      (hnode elem (+ 1 (rank heap-a)) heap-b heap-a)
      (hnode elem (+ 1 (rank heap-b)) heap-a heap-b)))
  
(define (hord? p h)
  (or (hleaf? h)
      (<= p (ord-priority (hnode-elem h)))))


(define (rank h)
  (if (hleaf? h)
      0
      (hnode-rank h)))

(define (heap? h)
  (or (hleaf? h)
      (and (hnode? h)   
      (heap? (hnode-l h))
      (heap? (hnode-r h))
      (<= (rank (hnode-r h))
          (rank (hnode-l h)))
      (= (hnode-rank h) (+ 1 (hnode-rank (hnode-r h))))
      (hord? (ord-priority (hnode-elem h))
             (hnode-l h))
(hord? (ord-priority (hnode-elem h))
       (hnode-r h)))))

(define (merge h1 h2)
  (cond [(hleaf? h1) h2]
        [(hleaf? h2) h1]
        [else (if (< (ord-priority (hnode-elem h1)) (ord-priority (hnode-elem h1)))
                  (make-node (hnode-elem h1) (hnode-l h1) (merge (hnode-r h1) h2))
                  (make-node (hnode-elem h2) (hnode-l h2) (merge (hnode-r h2) h1)))]))

(check-equal?   (hnode-elem
                (merge (hnode (ord "c" 3) 1 (hleaf) (hleaf)) 
                (merge (hnode (ord "B" 2) 1 (hleaf) (hleaf))
                (hnode (ord "A" 1) 1 (hleaf) (hleaf)))))                
                (ord "A" 1))

;zadanie 9

(define empty-pq (hleaf))

(define (pq-insert elt h)
  (merge h (make-hnode elt 1 (hleaf) (hleaf)))

    
(define (pq-pop h)
  (merge (hnode-l h) (hnode-r h)))

(define (pq-min h)
  (hnode-elem h))

(define (pq-empty? h)
  (hleaf? h))


  

                  