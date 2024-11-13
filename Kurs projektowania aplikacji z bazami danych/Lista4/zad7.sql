-- Mechanizmy kontroli współbieżności zarządzają jednoczesnym dostępem do współdzielonych danych w bazie danych, 
-- aby uniknąć konfliktów i zachować integralność danych.

-- pesymistyczna: transakcje zakładają, ze wystąpią konflikty więc nabywają blokady danych prezd uzyskaniem do nich dostępu
-- przykład:
-- 1. Transakcja A rozpoczyna aktualizację rekordu (np. salda klienta). Blokuje rekord, aby uniemożliwić innym transakcjom jego modyfikację.
-- 2. Podczas gdy transakcja A utrzymuje blokadę, transakcja B próbuje odczytać lub zaktualizować ten sam rekord, ale musi czekać, aż transakcja A
--    zatwierdzi lub wycofa i zwolni blokadę.
-- 3. Transakcja A zatwierdza, zwalniając blokadę. Transakcja B może następnie kontynuować operację na danych.

-- W tym scenariuszu transakcja B jest blokowana do momentu zakończenia transakcji A, co zapewnia brak konfliktu lub niespójności, ale potencjalnie zmniejsza wydajność systemu z powodu opóźnień blokowania.

--optymistyczna: transakcje zkaładają, ze konflikty są rzadkością
--             : operują na danych bez korzystania z blokad, ale sprawdzają konflikty przed commitem
--             : jeśli konflikt został wykryty to następuje rollback
-- przykład:
-- 1. Transakcja A odczytuje saldo klienta (np. 100 USD) i planuje je zaktualizować.
-- 2. W międzyczasie transakcja B odczytuje również to samo saldo w wysokości 100 USD, a następnie modyfikuje je, 
--    aby odzwierciedlało nowe saldo (np. 120 USD) i zatwierdza tę zmianę.
-- 3. Transakcja A próbuje teraz zaktualizować saldo do 90 USD. Jednak podczas procesu zatwierdzania wykrywa, 
--    że ​​saldo zostało już zmodyfikowane przez transakcję B.Ponieważ wykryto konflikt, transakcja A wycofuje się, 
--    a aktualizacja kończy się niepowodzeniem. Transakcja może zostać ponowiona lub użytkownik może zostać poproszony o ponowną próbę.

-- W tym przykładzie transakcja A unika blokowania, co pozwala na większą współbieżność, 
-- ale musi obsługiwać konflikty poprzez walidację przed zatwierdzeniem, co może prowadzić do wycofania zmian w przypadku wystąpienia konfliktów.