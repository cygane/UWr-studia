#lang plait

(define (delete elem lst)
  (cond ((empty? lst) empty)
        ((equal? elem (first lst)) (rest lst))
        (else (cons (first lst) (delete elem (rest lst))))))

(define (perms xs)
  (local [
          (define (pom ys)
            (cond [(empty? ys) empty]
                  [else (append (map (lambda (zs) (cons (first ys) zs)) (perms (delete (first ys) xs)))
                                (pom (rest ys)))]))]
    (if (empty? xs) (list xs) (pom xs))))






  

  
  

         




