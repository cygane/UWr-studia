#zadnie ostatnie z kolokwium 2020

#a
def zrob_tytul(s):
    s = s.split()
    d = len(s)
    tytul = ''
    for a in range(d):
        pom =  s[a][0].upper()
        s[a] = pom + s[a][1:]
        tytul += s[a] + ' '
    return tytul
    
#b
def suma_jednocyfrowych(L):
    d = len(L)
    suma = 0
    for i in range(d):
        if L[i] // 10 == 0:
            suma += L[i]
    return suma

#c
def same_palindromy(L):
    d = len(L)
    for i in range(d):
        if L[i] != L[i][::-1]:
            return False
    return True

#d
def namiotowa(L):
    d = len(L) - 1
    czubek = L[0]
    i = 0
    while i < d:
        if L[i+1] <= L[i]:
            break
        i = i+1

    while i < d :
        if L[i + 1] >= L[i]:
            return False
        i += 1
    return True
    



#e
def maksymalna_liczba_w_teksie(s):
    liczby = '1234567890'
    d = len(s)
    max = 0
    l = '0'
    i = 0
    while i < d:
        suma = 0
        x = ''
        j = i
        while s[j] in liczby:
            suma +=1
            x += s[j]
            if int(x) > int(l):
                l =''
                l += x
                suma = max
            j = j + 1
        i = j + 1
    return l

#f
def myFunc(e):
  return len(e)

def wydluzalne(L):
    L.sort(key=myFunc)
    d = len(L)-1
    for i in range (d):
        if L[i] not in L[i+1]:
            return False
    return True


print(zrob_tytul('nad niemnem'))
X = [12,16,17,5,2,0]
Y = ['oo','kamilslimak','nn','lll']
Z = '123 11 krowa333byk'
A = ['abc','a','ab']
#print(namiotowa(X))
#print(wydluzalne(A))
#print(maksymalna_liczba_w_teksie(Z))
print(same_palindromy(Y))
#print(suma_jednocyfrowych(X))
