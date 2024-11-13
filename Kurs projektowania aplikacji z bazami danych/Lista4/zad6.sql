-- blokowanie: instrukcje do nadpisywania defaultowego zachowania blokowania dyktowane przez transaction isolation level
--           : pozwala na kontrolę granulacji nad tym jak dane są zatwierdzane 
--           : moze optymalizowac control concurrency na podstawie odpowiednich wymagań

-- NOLOCK: Allows reading data without acquiring shared locks, effectively ignoring the transaction isolation level and allowing dirty reads.
-- ROWLOCK, PAGLOCK, TABLOCK: Restrict the scope of locking to rows, pages, or entire tables.
-- UPDLOCK: Acquires an update lock, ensuring that rows are protected from other transactions that may try to update them.
Drop table if exists Inventory

CREATE TABLE Inventory (
    ProductID INT PRIMARY KEY,
    Quantity INT
);

INSERT INTO Inventory (ProductID, Quantity) VALUES (1, 100), (2, 200);


SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

BEGIN TRANSACTION;
    SELECT * FROM Inventory;

COMMIT

SELECT *
FROM sys.dm_tran_locks

BEGIN TRANSACTION;
    SELECT * FROM Inventory WITH (NOLOCK);
COMMIT  

SELECT *
FROM sys.dm_tran_locks