
def pierwsza(a):
    d = 2
    k = 0
    while d * d <= a:
        if a % d == 0:
            k = 3
            break
        d = d + 1
    return k


def super_happy(cyfry,s):
    napis = s * '7'
    lewa = 0
    prawa = cyfry - s
    licznik = 0
    zbior = set()
    while prawa >= 0:
        if lewa == 0:
            for i in range(1, 10**prawa):
                k = napis + (prawa-len(str(i)))*'0'+str(i)
                if pierwsza (int(k)) != 3: 
                    licznik += 1
                    zbior.add(k)
        elif prawa == 0:
            for i in range(100, 10**lewa):
                k = (lewa-len(str(i)))*'0'+str(i) + napis
                if pierwsza (int(k)) != 3: 
                    licznik += 1
                    zbior.add(k)
        else:
            for i in range(1, 10**prawa):
                for j in range(10**(lewa-1), 10**lewa):  
                    k = str(j) + napis + (prawa-len(str(i)))*'0'+str(i)
                    if pierwsza (int(k)) != 3: 
                        licznik += 1
                        zbior.add(k)
        lewa += 1
        prawa = prawa - 1
    return (len(zbior))

print (super_happy(10,7))
        

  