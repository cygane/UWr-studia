from collections import defaultdict as dd

przedmiot = 'nieznany'


dziennik = dd(lambda : dd(list))


def ocena(ocena):
    pom = int(ocena)
    if ocena - pom >= 0.5:
        pom += 1
    return pom


for x in open('dziennik.txt'):
    L = x.split()
    if len(L) < 2:
        continue
        
    if L[0].lower() == 'przedmiot:':
        przedmiot = ' '.join(L[1:])
    else:
        if len(L) != 2: continue
        osoba = L[0] 
        oceny = [int(n) for n in L[1].split(',')]
            
        dziennik[przedmiot][osoba] += oceny    
        
osoby = {o for p in dziennik for o in dziennik[p]}

swiadectwo = {}
lista = []
for o in osoby:
    srednia = 0
    ile = 0
    print ('UCZEŃ:', o)
    for p in dziennik:
        oceny = dziennik[p][o]
        if oceny:
            print ('   ',p,'ŚREDNIA=', sum(oceny) / len(oceny), 'OCENA=',ocena(sum(oceny) / len(oceny)))
            srednia += ocena(sum(oceny) / len(oceny))
            ile += 1

    swiadectwo[srednia/ile] = o
    lista.append(srednia/ile)
              
    print () 

lista.sort()
d = len(lista)
for i in range(d):
    print(d-i,". ",swiadectwo[lista[i]])

print(swiadectwo)
# sorted(s,key = s.get)

