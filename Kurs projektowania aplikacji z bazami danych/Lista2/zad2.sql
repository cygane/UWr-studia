DROP TABLE IF EXISTS firstnames;
DROP TABLE IF EXISTS lastnames;
DROP TABLE IF EXISTS fldata;
GO

CREATE TABLE firstnames (
    id INT PRIMARY KEY,
    firstname VARCHAR(50)
);

CREATE TABLE lastnames (
    id INT PRIMARY KEY,
    lastname VARCHAR(50)
);

CREATE TABLE fldata (
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    PRIMARY KEY (firstname, lastname)
);
GO

INSERT INTO firstnames VALUES
(1, 'Julia'),
(2, 'Piotr'),
(3, 'Agnieszka');

INSERT INTO lastnames VALUES
(1, 'Cygan'),
(2, 'Wójcik'),
(3, 'Zych');
GO

DROP PROCEDURE if exists dbo.procedura
GO

CREATE PROCEDURE dbo.procedura 
@N INT
AS
BEGIN
    DECLARE @SFN INT, @SLN INT;
    SET @SFN = (SELECT COUNT(*) FROM firstnames);
    SET @SLN = (SELECT COUNT(*) FROM lastnames);

    IF @N > @SFN * @SLN
    THROW 50000, 'n is too big', 1;

    DELETE FROM fldata;

    INSERT INTO fldata 
    SELECT TOP (@N) firstname, lastname
    FROM firstnames
    CROSS JOIN lastnames
    ORDER BY NEWID();
END
GO

EXEC dbo.procedura @N = 3;
SELECT * FROM fldata;
EXEC dbo.procedura @N = 6;
SELECT * FROM fldata;
EXEC dbo.procedura @N = 10;
SELECT * FROM fldata;

