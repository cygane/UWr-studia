--zmienna @@IDENTITY zwraca ostatni wygenerowanynumer w ramach sesji (połączenia)
-- IDENT_CURRENT('tabela') zwraca ostatni wygenerowany numer w ramach wszystkich sesji i zasięgów

drop table if exists tabletest
go 

CREATE TABLE tabletest (
    ID INT IDENTITY(1000, 10) PRIMARY KEY,
    Column1 NVARCHAR(100),
    Column2 INT
);
GO

INSERT INTO tabletest (Column1, Column2) VALUES ('Example1', 123), ('Example2', 456);
 
SELECT * 
FROM tabletest

SELECT @@IDENTITY 

SELECT IDENT_CURRENT('SalesLT.Adress')