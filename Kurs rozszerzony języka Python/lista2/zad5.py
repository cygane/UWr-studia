def kompresja(tekst):
  result = []
  i = 0
  while i<len(tekst):
    sum = 1

    if i<len(tekst)-1:
      while tekst[i] == tekst[i+1]:
        sum += 1
        if i+1 == len(tekst)-1:
          i += 1
          break
        i += 1
      
    new = (sum, tekst[i])
    result.append(new)
    i = i + 1

  return result


def dekompresja(tekst_skompresowany):
  result = ""
  for i in range(len(tekst_skompresowany)):
      result += tekst_skompresowany[i][0]*tekst_skompresowany[i][1] 
  return result

#przetestowane na wierszu https://www.szymborska.org.pl/szymborska/wiersze/dlon/

print(kompresja("Dwadzieścia siedem kości, \
trzydzieści pięć mięśni, \
około dwóch tysięcy komórek nerwowych \
w każdej opuszce naszych pięciu palców. \
To zupełnie wystarczy, \
żeby napisać „Mein Kampf” \
albo „Chatkę Puchatka”."))

print(dekompresja(kompresja("Dwadzieścia siedem kości, \
trzydzieści pięć mięśni, \
około dwóch tysięcy komórek nerwowych \
w każdej opuszce naszych pięciu palców. \
To zupełnie wystarczy, \
żeby napisać „Mein Kampf” \
albo „Chatkę Puchatka”.")))