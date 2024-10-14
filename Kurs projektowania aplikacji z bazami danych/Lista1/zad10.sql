

-- CREATE TABLE M1(
--     K INT PRIMARY KEY, 
--     V VARCHAR(20)
-- )


-- CREATE TABLE S1(
--     K INT PRIMARY KEY, 
--     MFK INT,
--     V VARCHAR(20),
--     FOREIGN KEY (MFK) REFERENCES M1(K) ON UPDATE CASCADE ON DELETE SET NULL
-- )


-- CREATE TABLE M2(
--     K1 INT,
--     K2 INT,
--     PRIMARY KEY (K1, K2),
--     V VARCHAR(20)
-- )


-- CREATE TABLE S2(
--     K INT PRIMARY KEY, 
--     MFK1 INT, 
--     MFK2 INT,
--     FOREIGN KEY (MFK1, MFK2) REFERENCES M2(K1, K2) ON UPDATE NO ACTION ON DELETE CASCADE,
--     V VARCHAR(20)
-- )



-- INSERT INTO M1 (K, V) VALUES (1, 'val M1.1'), (2, 'val M1.2'), (3, 'val M1.3');
--INSERT INTO S1 (K, MFK, V) VALUES (1, 1, 'val S1.1'), (2, 2, 'val S1.2'), (3, 3, 'val S1.3');
-- INSERT INTO M2 (K1, K2, V) VALUES (1, 1, 'val M2.1'), (2, 2, 'val M2.2'), (3, 3, 'val M2.3');
--INSERT INTO S2 (K, MFK1, MFK2, V) VALUES (1, 1, 1, 'val S2.1'), (2, 2, 2, 'val S2.2'), (3, 3, 3, 'val S2.3');


--INSERT INTO S1 (K, MFK, V) VALUES (4, 4, 'Value S1 4');
--INSERT INTO S2 (K, MFK1, MFK2, V) VALUES (4, 4, 4, 'Value S2 4');


-- INSERT INTO S1 (K, MFK, V) VALUES (4, 4, 'Value S1 4');
--error, czyli git
-- INSERT INTO S2 (K, MFK1, MFK2, V) VALUES (4, 4, 4, 'Value S2 4');
--error, czyli git

-- ON UPDATE CASCADE: jesli zaaktualizujemy M1, to klucz obcy S1 automatycznie sie zaaktualizuje
-- ON DELETE SET NULL: jesli usuniemy M1, to klucz obcy S1 stanie sie nullem
-- ON UPDATE NO ACTION: jesli zaaktualizujemy M2, to nic sie nie stanie z kluczem obcym S2, aktualizacje zostaną zblokowane jeśli złamią integralność 
-- ON DELETE CASCADE: jesli usuniemy M2,to odpowiadajace sobie wiersze S2 automatycznie sie usuna



-- SELECT * FROM M1;
-- SELECT * FROM S1;
-- SELECT * FROM M2;
-- SELECT * FROM S2;


-- SELECT * FROM M1;
-- UPDATE M1
-- SET K=42
-- WHERE K=1;



-- odzyskaj poprzedni stan
-- UPDATE M1
-- SET K=1
-- WHERE K=42;

-- DELETE 
-- FROM M1
-- WHERE K=1;



--odzyskanie
-- INSERT INTO M1 (K, V) VALUES (1, 'val M1.1');
-- UPDATE S1 
-- SET MFK=1
-- WHERE K=1;

-- SELECT * FROM M1;
-- SELECT * FROM S1;


UPDATE M2
SET K1=42
WHERE K1=1;
--error

SELECT * FROM M2;
SELECT * FROM S2;
