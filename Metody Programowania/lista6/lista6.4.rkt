#lang plait

(define-type (NNF 'v)
  (nnf-lit [polarity : Boolean] [var : 'v])
  (nnf-conj [l : (NNF 'v)] [r : (NNF 'v)])
  (nnf-disj [l : (NNF 'v)] [r : (NNF 'v)]))

(define (neg-nnf fi)
  (cond [(nnf-conj? fi) (nnf-disj (neg-nnf (nnf-conj-l fi))
                                  (neg-nnf (nnf-conj-r fi)))]
        [(nnf-disj? fi) (nnf-conj (neg-nnf (nnf-disj-l fi))
                                  (neg-nnf (nnf-disj-r fi)))]
        [(nnf-lit? fi) (if (equal? (nnf-lit-polarity fi) #t)
                           (nnf-lit #f (nnf-lit-var fi))
                           (nnf-lit #t (nnf-lit-var fi)))]))

(define (xor x y)
  (cond [(and (equal? #t x) (equal? #t y)) #t]
        [(and (equal? #f x) (equal? #f y)) #t]
        [else #f]))


(define (eval-nnf sig fi)
  (cond [(nnf-conj? fi) (and (eval-nnf sig (nnf-conj-l fi))
                             (eval-nnf sig (nnf-conj-r fi)))]
        [(nnf-disj? fi) (or (eval-nnf sig (nnf-disj-l fi))
                            (eval-nnf sig (nnf-disj-r fi)))]
        [(nnf-lit? fi) (if (equal? (nnf-lit-polarity fi) #t)
                           (xor (sig (nnf-lit-var fi)) #t)
                           (xor (sig (nnf-lit-var fi)) #f))]))
        
        
