
plik = open('popularne_slowa.txt').read().split()
lalka = open('Lalka.txt').read().split()
slowa = []
slownik = {}

for i in range (len(plik)):
    if len(plik[i]) >= 5:
        slowa.append(plik[i])

slowa = set(slowa)

for i in range(len(lalka)):
    for k in range(5):
        c = ''
        for j in range(i,i+k+5):
            c = c+lalka[j][0]
        if c.lower() in slowa:
            print(c.lower(),lalka[i:i+5+k])
    









#for i in range(len(''))