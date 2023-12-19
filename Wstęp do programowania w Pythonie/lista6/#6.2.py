
plik = open('popularne_slowa.txt').read().split()
zbior = open('popularne_slowa.txt').read().split()


for i in range(len(zbior)):
    zbior[i] = zbior[i][::-1]+'-'+zbior[i]
    plik[i] = plik[i]+"-"+plik[i][::-1]

zbior = set(zbior)
plik = set(plik)

wynik = set(plik & zbior)

print(wynik)






    
