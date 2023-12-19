lalka = open('Lalka.txt').read().split()
litery = ['ą','ć','ę','ł','ń','ó','ś','ź','ż','Ą','Ć','Ę','Ł','Ń','Ó','Ś','Ź','Ż']
polskie = open('popularne_slowa.txt').read().split()
polskie = set(polskie)

j = 0
slowa = 0
k = 0
a = ''
max = 0
t = []
while j < len(lalka):
    for l in range (len(litery)):
        if litery[l] in lalka[j]:
            k = 13
            break
    if  k!= 13 and lalka[j] in polskie:
        slowa += 1
        a = a +' '+ lalka[j]
        if slowa > max:
            max = slowa
            t.append(a)
            print(a)
    else:
        a = ''
        slowa = 0
    k = 0
    j += 1

print ('Najdlusze:',t[len(t)-1])


    
