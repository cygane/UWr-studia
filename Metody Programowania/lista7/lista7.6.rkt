#lang racket

;(parametric->/c [a b] (-> (-> a b b) b (listof a) b))

;(parametric->/c [a a] (-> (-> a a) a (listof a) a))

(define/contract (foldr-right f acc xs)
  (parametric->/c [a b] (-> (-> a b b) b (listof a) b))
  (if (empty? xs)
      acc
      (foldr-right f acc (rest xs))))

(define/contract (foldr-right2 f acc xs)
  (parametric->/c [a] (-> (-> a a a) a (listof a) a))
  (if (empty? xs)
      acc
      (foldr-right2 f acc (rest xs))))

