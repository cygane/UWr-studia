-- ALTER TABLE SalesLT.Customer
-- ADD CreditCardNumber2 VARCHAR(20) NOT NULL DEFAULT '0000-0000-0000-0000';
-- GO

--GO puszcza najpierw zapytanie za którym się znajduje

--SELECT * FROM [SalesLT].[Customer]

-- UPDATE TOP(3) SalesLT.SalesOrderHeader
-- SET CreditCardApprovalCode = '123';
-- GO

-- SELECT TOP 10 * FROM SalesLT.Customer;

-- UPDATE SalesLT.Customer
-- SET CreditCardNumber2 = 'X'
-- FROM SalesLT.Customer JOIN SalesLT.SalesOrderHeader ON SalesLT.Customer.CustomerID = SalesLT.SalesOrderHeader.CustomerID
-- WHERE SalesLT.SalesOrderHeader.CreditCardApprovalCode IS NOT NULL;
-- GO

--sprawdzenie, co nie dziala
-- SELECT TOP 10 * 
-- FROM SalesLT.Customer JOIN SalesLT.SalesOrderHeader ON SalesLT.Customer.CustomerID = SalesLT.SalesOrderHeader.CustomerID
-- WHERE SalesLT.SalesOrderHeader.CreditCardApprovalCode IS NOT NULL;

SELECT Customer.CustomerID, CreditCardApprovalCode, CreditCardNumber2 FROM SalesLT.Customer LEFT JOIN SalesLT.SalesOrderHeader
ON SalesLT.Customer.CustomerID = SalesLT.SalesOrderHeader.CustomerID
WHERE CreditCardApprovalCode IS NOT NULL;

