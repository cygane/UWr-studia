-- ID | Patient       | Patient Address | Appointment time and location | Price | Physician | Appointment cause
---------------------------------------------------------------------------------------------------------------------
-- 1  | Jan  Kot      |6 Dolna Street,  |2029-02-01 12.30, room 12      |300zl  |Oleg       |Dental:
--    |               |44-444 Bor       |                               |       |Wyrwizab   |Denture fitting in (...)
---------------------------------------------------------------------------------------------------------------------
-- 2  |Maria Mysz     |9 Górna Street,  |2030-01-04 11.45, room 7       |150zl  |Ewa ciarka |Dermatology:  
--    |               |55-555 Las       |                               |       |           |Birthmark inspection (...)

-- 1NF
-- Wszystkie wartość w komórkach tabel są atomowe, czyli żadnych list, kolekcji, itp.
-- Kolejnosc wierszy dowolna
-- Nie zawiera powtarzajacych sie grup informacji

-- ID | Patient       | Patient Address | Postal Code | City | Appointment time | location | Price | Physician | Appointment cause | Appointment description
--------------------------------------------------------------------------------------------------------------------------------------------------------------
-- 1  | Jan  Kot      |6 Dolna Street   |44-444       |Bor   |2029-02-01 12.30  |room 12   |300zl  |Oleg       |Dental             |Denture fitting in (...)
--    |               |                 |             |      |                  |          |       |Wyrwizab   |                   | 
--------------------------------------------------------------------------------------------------------------------------------------------------------------
-- 2  |Maria Mysz     |9 Górna Street   |55-555       |Las   |2030-01-04 11.45  |room 7    |150zl  |Ewa ciarka |Dermatology        |Birthmark inspection (...)
--    |               |                 |             |      |                  |          |       |           |                   |

-- 2NF
-- To samo, co w INF oraz dodatkowo:
-- Żadna kolumna nie kluczowa nie jest częściowo funkcyjnie zależna od jakiegokolwiek klucza kandydującego (potencjalnego)
-- (W tabeli powinny być dane dotyczące tylko określonego rodzaju obiektu)
-- cel: eliminacja powtarzajacych sie danych

-- PatientID | Patient       | Patient Address | Postal Code | City 
-----------------------------------------------------------------------
-- 1         |Jank Kot       |6 Dolna Street   |44-444       |Bor   
--           |               |                 |             |      
------------------------------------------------------------------------
-- 2         |Maria Mysz     |9 Górna Street   |55-555       |Las     
--           |               |                 |             |  

-- ID | Appointment time | Appointment cause | Appointment description | Price
---------------------------------------------------------------------------------
-- 1  |2029-02-01 12.30  |Dental             |Denture fitting in (...) |300zl
--    |                  |                   |                         |
---------------------------------------------------------------------------------
-- 2  |2030-01-04 11.45  |Dermatology        |Birthmark inspection(...)|150zl
--    |                  |                   |                         |

-- PhysicianID | location | Physician 
----------------------------------------------
-- 1           |room 12   |Oleg       
--             |          |Wyrwizab   
----------------------------------------------
-- 2           |room 7    |Ewa ciarka 
--             |          |           

-- 3NF
-- To samo, co w 2INF oraz dodatkowo:
-- Każda kolumna nie będąca częścią klucza, zależy od niego bezpośrednio (a nie przechodnio)
-- Cel: Eliminowanie danych, które nie zależą od klucza

-- ID | PatientID | PhysicianID | Appointment time | Appointment cause | Appointment description | Price
---------------------------------------------------------------------------------------------------------------------
-- 1  |1          |1            |2029-02-01 12.30  |Dental             |Denture fitting in (...) |300zl
--    |           |             |                  |                   |
---------------------------------------------------------------------------------------------------------------------
-- 2  |2          |2            |2030-01-04 11.45  |Dermatology        |Birthmark inspection(...)|150zl
--    |           |             |                  |                   |

