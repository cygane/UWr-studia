#duze cyfry 
from duze_cyfry import  daj_cyfre

liczba=int(input('Podaj liczbe:'))

c=liczba
lista=[]
while liczba>0:
  lista.append(liczba%10)
  liczba=liczba//10

dlugosc=len(lista)


for i in range(5):
  dlugosc=len(lista)
  for j in range (dlugosc):
    print (daj_cyfre(lista[dlugosc-1])[i],end=' ')
    dlugosc=dlugosc-1
  print()


