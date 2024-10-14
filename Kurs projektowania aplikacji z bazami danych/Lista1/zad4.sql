--INSERT INTO [SalesLT].[ProductCategory] (Name, ParentProductCategoryID) VALUES ('MTB600', 5)
--INSERT INTO [SalesLT].[Product] (Name, ProductCategoryID, ProductNumber, StandardCost, ListPrice, SellStartDate) VALUES ('MTB600 bike product', 42, 'Bike Product', 1000.00, 1500.00, '2010-11-04')

SELECT pc.Name, p.Name
FROM [SalesLT].[Product] p JOIN [SalesLT].[ProductCategory] pc ON p.ProductCategoryID = pc.ProductCategoryID
WHERE pc.ProductCategoryID IN (SELECT ParentProductCategoryID FROM [SalesLT].[ProductCategory])