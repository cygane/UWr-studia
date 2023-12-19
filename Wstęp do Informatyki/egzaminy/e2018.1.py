


def ranga():
    n = 4
    x = [-1, 5, -4,5]
    srodek = n//2
    t = [0,0,0,0]
    k = 0


    while k < n:
        c = 0
        suma = 0
        pom = n 
        p = srodek
        l = 0
        for i in range(n//2):
            if x[n-1-i] >= x[k]:
                p -= 1
            if x[i] < x[k]:
                l += 1

        print(l,p)

        suma = l +  p
        t[k] = suma
        k += 1
    return t


def ranga2():
    n = 4
    x = [-1, 5,-4, 7]
    srodek = n//2
    t = [0,0,0,0]
    k = 0
    tmp = 0
    for i in range (n//2):
        while x[i] > x[srodek+k] and k < srodek:
            k += 1
            if srodek + k >= n - 1  :
                break
        if i > 0 and x[i-1] == x[i]:
            tmp += 1
        t[i] = k + i - tmp

    k = 0
    tmp = 0
    for i in range(n//2):
        while x[k] < x[srodek+i] and k < srodek:
            k += 1
        if i > 0 and x[srodek+i] == x[srodek + i -1]:
            tmp += 1
        t[srodek+i] = k + i - tmp

    return t

print(ranga2())
        
        


    
