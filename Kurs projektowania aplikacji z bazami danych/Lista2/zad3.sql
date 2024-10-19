DROP PROCEDURE IF EXISTS AddReader
GO

CREATE PROCEDURE AddReader
    @pesel VARCHAR(11),
    @lastName VARCHAR(50),
    @birthDate DATE
AS
BEGIN
    IF @pesel NOT LIKE '' + REPLICATE('[0-9]', 11)
    BEGIN
        THROW 50001, 'Invalid PESEL format', 1;
        RETURN;
    END

    IF @lastName NOT LIKE '[A-Z][a-z]%' COLLATE Latin1_General_CS_AS
    BEGIN
        THROW 50002, 'Invalid last name format', 1;
        RETURN;
    END

    IF TRY_CAST(@birthDate AS DATE) IS NULL
    BEGIN
        THROW 50003, 'Invalid birth date format', 1;
        RETURN;
    END
    IF @birthDate > GETDATE()
    BEGIN
        THROW 50004, 'Birth date in the future', 1;
        RETURN;
    END
    IF @birthDate < DATEADD(YEAR, -120, GETDATE())
    BEGIN
        PRINT 'The date is too old';
        RETURN;
    END
    

    
    INSERT INTO Czytelnik (PESEL, Nazwisko, Data_Urodzenia)
    VALUES (@pesel, @lastName, @birthDate);
END
GO

EXEC AddReader '12345678901', 'Kowalski', '1990-01-01';
GO
EXEC AddReader '12345678901', 'Nowak', '2077-01-01';
GO
EXEC AddReader '12345678901', 'abc','1790-01-01';
GO
EXEC AddReader '12345678901', 'Cygan','2003-02-39';
GO
EXEC AddReader '12345678901', '2abc', '1990-01-01';
GO
EXEC AddReader '12345678901', '2abc', 'date';
GO

SELECT * FROM Czytelnik
GO

DELETE FROM Czytelnik
WHERE PESEL = '12345678901'
GO