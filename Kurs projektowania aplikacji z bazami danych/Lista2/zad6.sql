
DECLARE @MyTableVariable TABLE (ID INT, Name VARCHAR(100));

INSERT INTO @MyTableVariable (ID, Name) VALUES (1, 'Jan Kowalski'), (2, 'Piotr Nowak');
--GO --uncommment to see that @MyTableVariable is no longer visible after GO

SELECT * FROM @MyTableVariable;

-- Local
DROP table if exists #LocalTempTable
CREATE TABLE #LocalTempTable (ID INT, Name VARCHAR(100));

INSERT INTO #LocalTempTable (ID, Name) VALUES (1, 'Alicja'), (2, 'Marek');

SELECT * FROM #LocalTempTable;

--Global
DROP table if exists ##GlobalTempTable
CREATE TABLE ##GlobalTempTable (ID INT, Name VARCHAR(100));

INSERT INTO ##GlobalTempTable (ID, Name) VALUES (1, 'Bernard'), (2, 'Marian');

SELECT * FROM ##GlobalTempTable;

SELECT * FROM tempdb.INFORMATION_SCHEMA.TABLES;
GO

--nie ma w następnej sesji
SELECT * FROM @MyTableVariable;

--nie ma w następnej sesji
SELECT * FROM #LocalTempTable;

SELECT * FROM ##GlobalTempTable;

SELECT * FROM tempdb.INFORMATION_SCHEMA.TABLES;


