--EXEC sp_helpconstraint 'SalesLT.SalesOrderHeader';
--([ShipDate]>=[OrderDate] OR [ShipDate] IS NULL)

-- UPDATE SalesLT.SalesOrderHeader
-- SET ShipDate = '2008-02-01 00:00:00.000'
-- WHERE SalesOrderID = 71774
-- error

-- ALTER TABLE SalesLT.SalesOrderHeader
-- NOCHECK CONSTRAINT CK_SalesOrderHeader_ShipDate;

--wyłączenie ograniczenia


-- UPDATE SalesLT.SalesOrderHeader
-- SET ShipDate = '2008-02-01 00:00:00.000'
-- WHERE SalesOrderID = 71774

ALTER TABLE SalesLT.SalesOrderHeader
CHECK CONSTRAINT CK_SalesOrderHeader_ShipDate;


SELECT * 
FROM SalesLT.SalesOrderHeader
WHERE ShipDate < OrderDate;
