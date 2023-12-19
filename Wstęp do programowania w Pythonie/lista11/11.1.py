#zadanie 10.2 z alfabetem angielskim
alfabet0 = set('abcdefghijklmnoprstuwyz')
plik = [w for w in open('popularne_slowa.txt').read().split() if set(w) <= alfabet0]
alfabet = 'abcdefghijklmnoprstuwyz'
slownik = {}
for i in range(len(alfabet)):
    slownik[alfabet[i]] = i

def caesar(s,k):
    slownik = {}
    napis = ''
    alfabet = 'abcdefghijklmnoprstuwyz'
    d = len(alfabet)
    for i in range(d):
        slownik[alfabet[i]] = alfabet[(i+k)%23]
    for a in s:
        napis += slownik[a]

    return napis


 
def cesarskie():
    nie = 'ąćęńóśźłżvqx,.1234567890;"“' + "'"
    dlugosc = len(plik)
    s = {}
    for i in range(dlugosc):
        k = slownik['a']  - slownik[plik[i][0]] 
        slowo = caesar(plik[i],k)
        if slowo in s:
            s[slowo].append(plik[i])
        else:
            s[slowo] = [plik[i]]

    maxi = 0  
    for e in s:
        if len(e) > maxi and len(s[e]) >= 2:
            maxi = len(e)
            klucz = e
        
    print(s[klucz])

    

cesarskie()
