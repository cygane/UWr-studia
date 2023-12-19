


def erastotenes(n):
    list = []
    for i in range(n+1):
        if i != 1:
            list.append(i)
        else:
            list.append(0)
        
    
    for i in range(len(list)):
        if list[i] != 0:
            wyz = list[i] 
            j = i * i
            while j < len(list):
                list[j] = 0
                j = j + i
    return list
        

def palindromy(a,b):
    e = erastotenes(b)
    listp = []
    while a < b+1:
        if e[a] != 0:
            c = ''
            pom = str(e[a])
            dlugosc = len(pom)-1
            for i in range (len(pom)):
                c += pom[dlugosc]
                dlugosc -= 1
            if c == pom:
                listp.append(int(c))
        a +=1
    return listp

#print (palindromy(2,1000000))

print(erastotenes(25))

