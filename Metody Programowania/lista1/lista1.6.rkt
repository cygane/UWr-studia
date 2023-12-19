#lang racket

(define (if ifCond ifTrue ifFalse)
       (or (and ifCond ifTrue) ifFalse))