DROP TRIGGER IF EXISTS max5specimens
DROP TABLE IF EXISTS book
DROP TABLE IF EXISTS specimen
GO

CREATE TABLE book (
    BookID INT PRIMARY KEY,
    Title NVARCHAR(100)
);

CREATE TABLE specimen (
    SpecimenID INT PRIMARY KEY,
    BookID INT,
    FOREIGN KEY (BookID) REFERENCES book(BookID)
);
GO

CREATE TRIGGER max5specimens
ON specimen
INSTEAD OF INSERT
AS
BEGIN
    DECLARE @BookID INT;
    SELECT @BookID = BookID FROM inserted;

    IF (SELECT COUNT(*) FROM specimen WHERE BookID = @BookID) >= 5
    BEGIN
        RAISERROR('Cannot add more than 5 specimens per book.', 16, 1);
        ROLLBACK TRANSACTION;
    END
    ELSE
    BEGIN
        INSERT INTO specimen (SpecimenID, BookID)
        SELECT SpecimenID, BookID FROM inserted;
    END
END;
GO


INSERT INTO book (BookID, Title) VALUES (1, 'Test Book 1');

INSERT INTO specimen (SpecimenID, BookID) VALUES (1, 1);
INSERT INTO specimen (SpecimenID, BookID) VALUES (2, 1);
INSERT INTO specimen (SpecimenID, BookID) VALUES (3, 1);
INSERT INTO specimen (SpecimenID, BookID) VALUES (4, 1);
INSERT INTO specimen (SpecimenID, BookID) VALUES (5, 1);


SELECT * FROM specimen WHERE BookID = 1;
GO

INSERT INTO specimen (SpecimenID, BookID) VALUES (6, 1);

DELETE FROM specimen;
DELETE FROM book;

