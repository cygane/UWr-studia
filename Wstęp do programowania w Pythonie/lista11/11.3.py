plik = open('wybory.txt').read().split()

pliki = []

for i in range(41):
    lista = []
    for j in range(7):
        if plik[i*7+j] == '–':
            lista.append(0)
        else:
            a = plik[i*7+j].replace(',','.')
            lista.append(a)
    pliki.append(lista)

mandaty = { 
    'PIS' : 0,
    'KO' : 0,
    'SLD' : 0,
    'PSL' : 0,
    'KWiN' : 0,
    'MN' : 0,
}

partie = ['PIS','KO','SLD','PSL','KWiN','MN']

for i in range(41): 
    dlugosc = int(pliki[i][0])
    #print(dlugosc)
    lista = []
    dzielnik = 1
    for j in range(dlugosc):
        for k in range(1,7):
            lista.append((((float(pliki[i][k])))/dzielnik,k))
        dzielnik += 1


    lista.sort(reverse = True)
   
    

    for c in range(dlugosc):
       mandaty[partie[lista[c][1]-1]] += 1
    
  

#['12', '42.40', '25.02', '16.43', '7.17', '5.85', 0]
print(mandaty)
