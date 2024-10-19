--coś nie śmiga jak powinno
--lokalna tabela
CREATE TABLE #temp_local (id INT, name VARCHAR(50))
INSERT INTO #temp_local VALUES (1, 'John'), (2, 'Jane'), (3, 'Bob')
GO

-- globalna tabela
CREATE TABLE ##temp_global (id INT, name VARCHAR(50))
INSERT INTO ##temp_global VALUES (1, 'Alice'), (2, 'Bob'), (3, 'Charlie')
GO

-- zmienna tabelowa
DECLARE @table_variable TABLE (id INT, name VARCHAR(50))
INSERT INTO @table_variable VALUES (1, 'David'), (2, 'Emily'), (3, 'Frank')
GO

-- Zmienna tabelowa będzie dostępna tylko w obrębie tego wsadu (można jej używać wewnątrz tej sesji, ale nie istnieje w tempdb).
-- Lokalna tabela tymczasowa (#temp_local) będzie dostępna tylko w tej sesji.
-- Globalna tabela tymczasowa (##temp_global) będzie dostępna dla każdej sesji, więc po utworzeniu można się do niej odwoływać w innych sesjach.

SELECT * FROM tempdb.INFORMATION_SCHEMA.tables WHERE table_name LIKE '%#temp_local%'
SELECT * FROM tempdb.INFORMATION_SCHEMA.tables WHERE table_name LIKE '%##temp_global%'
SELECT * FROM tempdb.INFORMATION_SCHEMA.tables WHERE table_name LIKE '%@table_variable%'

IF EXISTS (SELECT 1 FROM @table_variable)
    PRINT 'The table variable still exists 1.'
ELSE
    PRINT 'The table variable has been dropped 1.'
GO

--nowa sesja
-- Zmienna tabelowa (@temp_table_variable): Nie będzie dostępna, ponieważ zmienne tabelowe są ograniczone do wsadu, w którym zostały zadeklarowane.
-- Lokalna tabela tymczasowa (#temp_local): Nie będzie dostępna, ponieważ lokalne tabele tymczasowe są dostępne tylko w obrębie sesji, w której zostały utworzone.
-- Globalna tabela tymczasowa (##temp_global): Będzie dostępna, ponieważ globalne tabele tymczasowe są widoczne w wielu sesjach.
SELECT * FROM tempdb.INFORMATION_SCHEMA.tables WHERE table_name LIKE '#temp_local%'
SELECT * FROM tempdb.INFORMATION_SCHEMA.tables WHERE table_name LIKE '##temp_global%'
SELECT * FROM tempdb.INFORMATION_SCHEMA.tables WHERE table_name LIKE '@table_variable%'

IF EXISTS (SELECT 1 FROM table_variable)
    PRINT 'The table variable still exists 2.'
ELSE
    PRINT 'The table variable has been dropped 2.'
GO

-- opoznienie we wsadzie
-- Zmienna tabelowa (@temp_table_variable): Istnieje tylko w trakcie trwania wsadu. Po zakończeniu wsadu lub deklaracji zmienna tabelowa zostanie usunięta.
-- Lokalna tabela tymczasowa (#temp_local): Istnieje w trakcie sesji. Zostanie automatycznie usunięta po zakończeniu sesji.
-- Globalna tabela tymczasowa (##temp_global): Będzie istnieć do momentu, gdy wszystkie sesje, które ją używają, zostaną zamknięte.
WAITFOR DELAY '00:00:10'
GO

SELECT * FROM tempdb.INFORMATION_SCHEMA.tables WHERE table_name LIKE '#temp_local%'
SELECT * FROM tempdb.INFORMATION_SCHEMA.tables WHERE table_name LIKE '##temp_global%'
SELECT * FROM tempdb.INFORMATION_SCHEMA.tables WHERE table_name LIKE '@table_variable%'

IF EXISTS (SELECT 1 FROM @temp_table_variable)
    PRINT 'The table variable still exists delay 1.'
ELSE
    PRINT 'The table variable has been dropped delay 1.'
GO


DROP TABLE #temp_local
DROP TABLE ##temp_global


SELECT * FROM tempdb.INFORMATION_SCHEMA.tables WHERE table_name LIKE '#temp_local%'
SELECT * FROM tempdb.INFORMATION_SCHEMA.tables WHERE table_name LIKE '##temp_global%'
SELECT * FROM tempdb.INFORMATION_SCHEMA.tables WHERE table_name LIKE '@table_variable%'

IF EXISTS (SELECT 1 FROM @temp_table_variable)
    PRINT 'The table variable still exists.'
ELSE
    PRINT 'The table variable has been dropped.'
GO