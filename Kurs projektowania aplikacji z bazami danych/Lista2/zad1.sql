DROP FUNCTION IF EXISTS dbo.get_specimens_number;
GO

CREATE FUNCTION dbo.get_specimens_number(@days int)
RETURNS TABLE
RETURN
SELECT PESEL, COUNT(*) AS specimens_number 
FROM Wypozyczenie INNER JOIN Czytelnik ON Wypozyczenie.CZYTELNIK_ID = Czytelnik.Czytelnik_ID
WHERE Liczba_dni > @days
GROUP BY PESEL
GO

SELECT * FROM dbo.get_specimens_number(10)