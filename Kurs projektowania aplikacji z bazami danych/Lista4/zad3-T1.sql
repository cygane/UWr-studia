--USE Test;

 -- Dirty read występuje, gdy transakcja odczytuje dane zmienione przez inną transakcję, która nie została jeszcze zatwierdzona. Jeśli ta druga transakcja zostanie cofnięta, odczytane dane okażą się nieprawidłowe.
 -- Non-repeatable read ma miejsce, gdy w trakcie jednej transakcji dane są odczytywane dwukrotnie, a w międzyczasie zostały zmienione przez inną transakcję. Wynik drugiego odczytu jest więc inny niż pierwszego.
 -- Phantom read występuje, gdy w trakcie jednej transakcji zbiór danych spełniających określone kryteria zmienia się przez dodanie lub usunięcie rekordów przez inną transakcję.
-- dirty read: SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED; 
-- non repetable read: SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED; 
--                     SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
-- phantom read:
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED; 
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
DROP TABLE IF EXISTS zad3;
CREATE TABLE zad3 (
	id INT,
	val INT
);

INSERT INTO zad3 (id, val) VALUES (1, 42);

-- part 1 of T1
BEGIN TRANSACTION
SELECT val FROM zad3 WHERE id=1;

WAITFOR DELAY '00:00:05'

-- part 2 of T1
SELECT val FROM zad3 WHERE id=1; -- will read value 32 that will soon be rolled back
COMMIT