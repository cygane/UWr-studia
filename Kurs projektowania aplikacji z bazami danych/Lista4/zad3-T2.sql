--dirty read

-- T2
-- BEGIN TRANSACTION
-- UPDATE zad3 SET val=32 WHERE id=1;
-- WAITFOR DELAY '00:00:05'

-- ROLLBACK; 

--non-repatable read
--T2
BEGIN TRANSACTION
INSERT INTO zad3 (id, val) VALUES (1, 15);
WAITFOR DELAY '00:00:05'

COMMIT;

--phantom read