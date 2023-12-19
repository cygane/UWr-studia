#lang racket
(require racket/base)

(provide (struct-out column-info)
         (struct-out table)
         (struct-out and-f)
         (struct-out or-f)
         (struct-out not-f)
         (struct-out eq-f)
         (struct-out eq2-f)
         (struct-out lt-f)
         table-insert
         table-project
         table-sort
         table-select
         table-rename
         table-cross-join
         table-natural-join)

(define-struct column-info (name type) #:transparent)

(define-struct table (schema rows) #:transparent)

(define cities
  (table
   (list (column-info 'city    'string)
         (column-info 'country 'string)
         (column-info 'area    'number)
         (column-info 'capital 'boolean))
   (list (list "Wrocław" "Poland"  293 #f)
         (list "Warsaw"  "Poland"  517 #t)
         (list "Poznań"  "Poland"  262 #f)
         (list "Berlin"  "Germany" 892 #t)
         (list "Munich"  "Germany" 310 #f)
         (list "Paris"   "France"  105 #t)
         (list "Rennes"  "France"   50 #f))))

(define countries
  (table
   (list (column-info 'country 'string)
         (column-info 'population 'number))
   (list (list "Poland" 38)
         (list "Germany" 83)
         (list "France" 67)
         (list "Spain" 47))))

(define (empty-table columns) (table columns '()))

; wstawianie

(define (same-type? row col-info)
  (cond[(equal? col-info 'string) (string? row)]
       [(equal? col-info 'number) (number? row)]
       [(equal? col-info 'boolean) (boolean? row)]
       [(equal? col-info 'symbol) (symbol? row)]))

(define (helper row tab)
  (define (it roww col)
    (cond [(or (empty? roww) (empty? col)) #t]
          [(not (same-type? (first roww) (column-info-type (first col)))) #f]
          [else (it (rest roww) (rest col))]))
  (it row (table-schema tab)))

(define (helper2 row tab)
  (and (= (length row) (length (table-schema tab))) (helper row tab)))

(define (table-insert row tab)
  (if (not (helper2 row tab))
      (error 'skladnia)
      (table (table-schema tab) (cons row (table-rows tab)))))

      
;projekcja

(define (helper-col cols tab)
  (if (empty? cols)
      empty
      (if (equal? (first cols) (column-info-name (first tab)))
          (cons (first tab) (helper-col (rest cols) (rest tab)))
          (helper-col cols (rest tab)))))             
        
(define (position cols tab)
  (define (it col t acc pos)
    (if (empty? col)
        (reverse pos)
        (if (equal? (first col) (column-info-name (first t)))
            (it (rest col) (rest t) (+ 1 acc) (cons acc pos))
            (it col (rest t) (+ 1 acc) pos))))
  (it cols (table-schema tab) 0 empty))

(define (helper-row roww cols tab)
  (define (it row acc pos res)
    (if (empty? pos)
       empty
        (if (= (first pos) acc)
            (cons (first row) (it (rest row) (+ 1 acc) (rest pos) (cons (first row) res)))
            (it (rest row) (+ 1 acc) pos res))))
  (it roww 0 (position cols tab) empty))

(define (table-project cols tab)
  (define (it rows res)
    (if (empty? rows)
        (table (helper-col cols (table-schema tab)) (reverse res))
        (it (rest rows) (cons (helper-row (first rows) cols tab) res))))
    (it (table-rows tab) empty))

  
;zmiana nazwy

(define (rename-helper col ncol tab)
  (if (empty? tab)
      empty
      (if (equal? col (column-info-name (first tab)))
          (cons (column-info ncol (column-info-type (first  tab)))
                (rename-helper col ncol (rest tab)))
          (cons (first tab) (rename-helper col ncol (rest tab))))))

(define (table-rename col ncol tab)
  (table (rename-helper col ncol (table-schema tab)) (table-rows tab)))
  
;sortowanie

(define (proced type)
  (cond
    [(equal? type 'boolean) (lambda (x y) (and y (not x)))]
    [(equal? type 'symbol)  (lambda (x y) (string-ci<? (symbol->string x) (symbol->string y)))]
    [(equal? type 'string) string-ci<?]
    [(equal? type 'number) <] ))

(define (in-v col rows sche) 
  (if (null? rows)
      (error 'zle)
      (if (equal? (column-info-name (first sche)) col)
          (first rows)
          (in-v col (rest rows) (rest sche)))))

(define (in-sch col sche)
  (if (null? sche)
      (error 'zle)
      (if (equal? (column-info-name (first sche)) col)
          (column-info-type (first sche))
          (in-sch col (rest sche)))))

(define (compare cols rows sche)
  (if (null? cols)
      #f
      (cond
        [(equal? (in-v (first cols) (first rows) sche) (in-v (first cols) (rest rows) sche)) (compare (rest cols) rows sche)]
        [else ((proced (in-sch (first cols) sche)) (in-v (first cols) (first rows) sche) (in-v (first cols) (rest rows) sche) )])))

(define (table-sort cols tab)
  (if (null? cols)
      tab
      (if (cons? cols)
          (table (table-schema tab) (sort (table-rows tab) (lambda (x y) (compare cols (cons x y) (table-schema tab)))))
          (table (table-schema tab) (sort (table-rows tab) (lambda (x y) (compare (list cols) (cons x y) (table-schema tab))))))))

;selekcja
(define-struct and-f (l r))
(define-struct or-f (l r))
(define-struct not-f (e))
(define-struct eq-f (name val))
(define-struct eq2-f (name name2))
(define-struct lt-f (name val))

(define (proced2 type)
  (cond
    [(boolean? type) (lambda (x y) (and y (not x)))]
    [(symbol? type)  (lambda (x y) (string-ci<? (symbol->string x) (symbol->string y)))]
    [(string? type) string-ci<?]
    [(number? type) <] ))

(define (row-true row col fi)
  (cond [(and-f? fi) (and (row-true row col (and-f-l fi)) (row-true row col (and-f-r fi)))]
        [(or-f? fi) (or (row-true row col (or-f-l fi)) (row-true row col (or-f-r fi)))]
        [(not-f? fi) (not (row-true row col (not-f-e fi)))]
        [(eq-f? fi) (equal? (in-v (eq-f-name fi) row col) (eq-f-val fi))]
        [(eq2-f? fi) (equal? (in-v (eq2-f-name fi) row col) (in-v (eq2-f-name2 fi) row col))]
        [(lt-f? fi) ((proced2 (lt-f-val fi)) (in-v (lt-f-name fi) row col) (lt-f-val fi))]))

(define (table-select form tab)
  (define (it rows res)
    (if (empty? rows)
        (table (table-schema tab) res)
        (if (row-true (first rows) (table-schema tab) form)
            (it (rest rows) (cons (first rows) res))
            (it (rest rows) res))))
  (it (table-rows tab) empty))
  
;zlaczenie kartezjanskie 

(define (column-join tab1 tab2)
  (define (it cols1 cols2 res)
    (if (and (empty? cols1) (empty? cols2))
        (reverse res)
        (if (empty? cols1)
            (it cols1 (rest cols2) (cons (first cols2) res))
            (it (rest cols1) cols2 (cons (first cols1) res)))))
  (it (table-schema tab1) (table-schema tab2) empty))
  
(define (row-join tabrow1 tabrow2)
  (define (it row1 row2 res)
    (if (and (empty? row1) (empty? row2))
        (reverse res)
        (if (empty? row1)
            (it row1 (rest row2) (cons (first row2) res))
            (it (rest row1) row2 (cons (first row1) res)))))
  (it tabrow1 tabrow2 empty))

(define (table-cross-join tab1 tab2)
  (define (it rows1 rows2 res)
    (if (empty? rows1)
        (table (column-join tab1 tab2) (reverse res))
        (if (empty? rows2)
            (it (rest rows1) (table-rows tab2) res)
            (it rows1 (rest rows2) (cons (row-join (first rows1) (first rows2)) res)))))
  (it (table-rows tab1) (table-rows tab2) empty))

;zlaczenie naturalne

(define (col-rename col name)
  (column-info name (column-info-type col)))

(define (sym x)
  (string->symbol (number->string x)))
        
(define (if-rename tab1 tab2)
  (define (it cols1 cols2 iff x res)
    (if (empty? cols1)
        (reverse res)
        (cond [(and (empty? cols2) (equal? iff #f))
              (it (rest cols1) (table-schema tab2) iff (+ 1 x) (cons (first cols1) res))]
              [(and (empty? cols2) (equal? iff #t))
               (it (rest cols1) (table-schema tab2) #f (+ 1 x) res)]
              [(equal? (column-info-name (first cols1)) (column-info-name (first cols2)))
               (it cols1 (rest cols2) #t (+ 1 x) (cons (col-rename (first cols1) (sym x)) res))]
              [else (it cols1 (rest cols2) iff (+ 1 x) res)])))
  (it (table-schema tab1) (table-schema tab2) #f 0 empty))

(define (which tab1 tab2)
  (define (it cols1 cols2 res actual acc1 acc2)
    (if (empty? cols1)
        res
        (cond [(empty? cols2)
              (it (rest cols1) (table-schema tab2) (cons actual res) empty (+ 1 acc1) 0)]
              [(equal? (column-info-name (first cols1)) (column-info-name (first cols2)))
               (it cols1 (rest cols2) res (cons acc1 (cons (+ (length (table-schema tab1)) acc2) actual)) acc1 (+ 1 acc2))]
              [else (it cols1 (rest cols2) res actual acc1 (+ 1 acc2))])))
  (it (table-schema tab1) (table-schema tab2) empty empty 0 0))

(define (less tab1 tab2)
  (define (it position res)
    (if (empty? position)
        (reverse res)
        (if (empty? (first position))
            (it (rest position) res)
            (it (rest position) (cons (first position) res)))))
  (it (which tab1 tab2) empty))

(define (alike row position)
  (define (it roww pos acc same)
    (if (empty? roww)
        same
        (if (= acc pos)
            (it empty pos acc (first roww))
            (it (rest roww) pos (+ 1 acc) same))))
  (it row (first position) 0 empty))

(define (helper-stay row position)
  (define (it roww pos acc same iff)
    (if (empty? roww)
        iff
        (if (empty? pos)
            (it empty pos acc same iff)
         (if (and (= acc (first pos)) (equal? (first roww) same))
            (it (rest roww) (rest pos) (+ 1 acc) same row)
            (it (rest roww) pos (+ 1 acc) same iff)))))
  (it row (rest position) 0 (alike row position) #f))

(define (helper-n-join tabrow position)
  (define (it rows pos res)
    (if (empty? rows)
        (reverse res)
        (if (not (equal? (helper-stay (first rows) pos) #f))
            (it (rest rows) pos (cons (helper-stay (first rows) pos) res))
            (it (rest rows) pos res))))
  (it tabrow position empty))

(define (delete columns position)
  (define (it cols pos res acc)
    (if (empty? cols)
        (reverse res)
        (if (empty? pos)
            (it (rest cols) pos (cons (first cols) res) acc)
            (if (= pos acc)
                (it (rest cols) empty res (+ 1 acc))
                (it (rest cols) pos (cons (first cols) res) (+ 1 acc))))))
  (it columns (first position) empty 0))

(define (helper-project columns)
  (define (it cols res)
    (if (empty? cols)
        (reverse res)
        (it (rest cols) (cons (column-info-name (first cols)) res))))
  (it columns empty))

(define (table-natural-join tab1 tab2)
  (define pos (less tab1 tab2))
  (if (empty? (rest pos))
   (table-project (helper-project (delete (column-join (table (if-rename tab1 tab2) (table-rows tab1)) tab2) (first pos))) 
                 (table (column-join (table (if-rename tab1 tab2) (table-rows tab1)) tab2) (helper-n-join (table-rows (table-cross-join tab1 tab2)) (first pos))))
   (table-project (helper-project (helpp-columns (column-join (table (if-rename tab1 tab2) (table-rows tab1)) tab2) pos))
   (table (column-join (table (if-rename tab1 tab2) (table-rows tab1)) tab2)
   (help2-row (table-rows (table-cross-join tab1 tab2)) pos)))
   ))

(define (help2-row tabrow position)
  (define (it rows pos res)
    (if (empty? pos)
        res
        (it (helpp-rows rows (first pos)) (rest pos) (helpp-rows rows (first pos)))))
  (it tabrow position empty))
    
(define (helpp-columns tabschem position)
  (define (it cols pos res)
    (if (empty? pos)
        res
        (it (delete cols (first pos)) (rest pos) (delete cols (first pos)))))
  (it tabschem position empty))

  
(define (helpp-rows tabrow position)
  (helper-n-join tabrow position))

(define zawodnicy
  (table
   (list (column-info 'country 'string)
         (column-info 'city 'string)
         (column-info 'sport 'string)
         (column-info 'name 'string))
   (list (list "Poland" "Wroclaw" "Plywanie" "Julia")
         (list "Poland" "Wroclaw" "Skoki" "Kacper")
         (list "Germany" "Berlin" "Siatkowka" "Oliwia"))))

(define klub
  (table
   (list (column-info 'country 'string)
         (column-info 'city 'string)
         (column-info 'sport 'string)
         (column-info 'namesport 'string))
   (list (list "Poland" "Wroclaw" "Plywanie" "UKS28")
         (list "Poland" "Wroclaw" "Skoki" "UKS5")
         (list "Poland" "Wroclaw" "Siatkowka" "UKS9")
         (list "Germany" "Berlin" "Siatkowka" "wurst"))))
               
            




      













  

