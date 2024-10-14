SELECT productmodel.Name, COUNT (*)
FROM [SalesLT].[Product] product LEFT JOIN [SalesLT].[ProductModel] productmodel ON product.ProductModelID = productmodel.ProductModelID
GROUP BY productmodel.ProductModelID, productmodel.Name
HAVING COUNT(*) > 1

-- przy grupowaniu po nazwie moglibyśmy złączyć dwa rózne produkty o tej samej nazwie