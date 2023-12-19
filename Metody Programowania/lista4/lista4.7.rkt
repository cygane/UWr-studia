#lang racket

(define-struct queue (pre suf) #:transparent)

(define empty-queue (cons null null))

(define (empty? q) (null? (queue-pre q)))

(define (push-back x q)
  (cond [(empty? q) (queue (reverse (queue-suf q)) null)]
        [else (queue (queue-pre q) (cons x (queue-suf q)))]))

(define (front q) (car (queue-pre q)))

(define (pop q)
  (cond [(null? (cdr (queue-pre q))) (queue (reverse (queue-suf q)) null)]
        [else (queue (cdr (queue-pre q)) (queue-suf q))]))


(define q (queue (list 3) (list 6 5 4)))
(empty? q)
(front q)
(pop q)
(define s (queue (list 4 5 6) null))
(pop s)


