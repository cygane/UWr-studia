
L = [1,2,3,1,2,3,8,2,2,2,9,9,4]
lista = []
res = []
rez = []

def usun_duplikaty(L):
    for i in range(len(L)):
        lista.append([L[i], i])

    lista.sort()

    res.append(lista[0])

    for i in range(len(L)-1):
        if lista[i][0] != lista[i+1][0]:
            res.append(lista[i+1])
    
    for i in range(len(res)):
        pom = res[i][0]
        res[i][0] = res[i][1]
        res[i][1] = pom
    res.sort()

    for i in range(len(res)):
        rez.append(res[i][1])



usun_duplikaty(L)
print (rez)




