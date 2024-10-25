-- cos dziwnego dla statica, albo ja w to nie umiem (duza szansa)

--rodzaje kursorów:
--statyczne: dla danych wynikowych kursora tworzona jes tymczasowa tabela w bazie tempdb i na tej tabeli wykonywane są operacje
--dynamiczne: pracujemy na żywej tabeli, nie działa fetch absolute, ale działa fetch relative
--kluczowe: tylko wartości kluczy są kopiowane do tymczasowej tabeli w tempdb

set nocount on

drop table if exists liczby
go
create table liczby( nr int primary key, liczba int )
go
declare @a int
set @a=1
while ( @a<=60)
begin
  insert liczby values ( @a, @a )
  set @a=@a+1
end
go

declare @x int
set @x=10

-- Do wykonania 3 razy (ka�de z osobna, analizujemy wyniki: results i messages)
--declare c cursor for select liczba from liczby where liczba<=@x
-- (pracujemy bezpośrednio na tabeli liczby, 
-- tylko niektóre liczby zostaną wyświetlone, ponieważ usunięcie rekordów podczas iteracji wpłynie na dostępność kolejnych rekordów)

--declare c cursor static for select liczba from liczby where liczba<=@x
--(zmiany w tabeli liczby nie będą widoczne w wynikach, bo kopiujemy wszystko do tymczasowej tabeli,
-- wszystkie liczby zostaną wyświetlone, ponieważ zmiany w tabeli nie mają wpływu na kursory statyczne)

declare c cursor keyset for select liczba from liczby where liczba<=@x
--(do tymczasowej tabeli kopiowane są tylko wartości kluczy (kolumny nr), a same rekordy odwołują się do oryginalnej tabeli,
-- częściowe odzwierciedlenie zmian, ponieważ kursor będzie mógł odnaleźć brakujące klucze)

set @x=20

open c

declare @aux int, @licznik int
set @licznik=2

print 'Kolejne liczby z kursora:'
fetch next from c into @aux 
while ( @@fetch_status=0 )
begin
  print @aux;
--  print 'Liczba: '+cast(@aux as varchar)
--  print 'Licznik: '+cast(@licznik as varchar)
  delete from liczby where liczba=@licznik
  fetch next from c into @aux 
  set @licznik=@licznik+2
end
print 'Status ostatniej instrukcji fetch: ' + cast(@@fetch_status as varchar)
close c
deallocate c

select * from liczby where liczba<=10