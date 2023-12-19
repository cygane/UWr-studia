

def wieza(n):
    t = []
    wys = 1
    ile = 1
    pom = n - 1
    while pom > 0:
        ile += 2
        pom -= 1

    
    ile = ile //2

    for i in range(n):
        for j in range(3):
            print(ile*' '+wys*'#'+ile*' ')
        wys += 2
        ile -= 1
    print(t)

wieza(5)

'''def wiezal(L):
    ile = []
    suma = 0
    max = 0
    for i in range(len(L)):
        ile.append(1+(L[i]-1)*2)
        suma += ile[i]
        if ile[i] > max:
            max = ile[i]

    suma += len(L) - 1

    t = [suma*[' '] for i in range(max)]'''
    


