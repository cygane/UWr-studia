DROP TABLE IF EXISTS Prices;
DROP TABLE IF EXISTS Rates;
DROP TABLE IF EXISTS Products;

CREATE TABLE Products (
    ID INT PRIMARY KEY,
    ProductName NVARCHAR(100)
);

CREATE TABLE Rates (
    Currency NVARCHAR(10) PRIMARY KEY,
    PricePLN DECIMAL(10, 2)
);

CREATE TABLE Prices (
    ProductID INT,
    Currency NVARCHAR(10),
    Price DECIMAL(10, 2),
    FOREIGN KEY (ProductID) REFERENCES Products(ID),
);

-- INSERT INTO Products (ID, ProductName) VALUES (1, 'X');
-- INSERT INTO Rates (Currency, PricePLN) VALUES ('USD', 4.0), ('EUR', 4.5), ('PLN', 1.0);
-- INSERT INTO Prices (ProductID, Currency, Price) VALUES (1, 'USD', 4.0), (1, 'EUR', 4.5), (1, 'PLN', 5.0);

INSERT INTO Products (ID, ProductName) VALUES (1, 'A'), (2, 'B');

INSERT INTO Rates (Currency, PricePLN) VALUES 
    ('USD', 4.0), 
    ('EUR', 4.5), 
    ('PLN', 1.0),
    ('NEW', 3.5);

INSERT INTO Prices (ProductID, Currency, Price) VALUES 
    (1, 'PLN', 100.0), 
    (1, 'USD', 25.0), 
    (1, 'EUR', 22.22), 
    (1, 'NEW', 500.0),
    (2, 'PLN', 200.0), 
    (2, 'GBP', 40.0); 


DECLARE 
    @ProductID INT,
    @Currency NVARCHAR(10),
    @PricePLN DECIMAL(10, 2),
    @BasePricePLN DECIMAL(10, 2);


DECLARE price_cursor CURSOR FOR
SELECT ProductID, Currency
FROM Prices;

OPEN price_cursor;
FETCH NEXT FROM price_cursor INTO @ProductID, @Currency;

WHILE @@FETCH_STATUS = 0
BEGIN
    IF EXISTS (SELECT 1 FROM Rates WHERE Currency = @Currency)
    BEGIN
        SELECT @BasePricePLN = Price 
        FROM Prices 
        WHERE ProductID = @ProductID AND Currency = 'PLN';

        SELECT @PricePLN = PricePLN 
        FROM Rates 
        WHERE Currency = @Currency;

        UPDATE Prices
        SET Price = @BasePricePLN / @PricePLN
        WHERE ProductID = @ProductID AND Currency = @Currency;
    END
    ELSE
    BEGIN
        DELETE FROM Prices
        WHERE ProductID = @ProductID AND Currency = @Currency;
    END;

    FETCH NEXT FROM price_cursor INTO @ProductID, @Currency;
END;

CLOSE price_cursor;
DEALLOCATE price_cursor;
GO

SELECT * FROM Prices;
