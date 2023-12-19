
from collections import defaultdict as dd
plik = list(open('popularne_slowa.txt').read().split())

def slownik(slowo):
    s = dd(lambda: 0)
    for i in slowo:
        if i != ' ':
            if i in s:
                s[i] += 1
            else:
                s[i] = 1
    return s

def usuwanie(u,s):
    a = ''
    s1 = slownik(u)
    for i in s:
        s1[i] -= 1
    for i in u:
        if s1[i] > 0:
            a += i
    return a
    
    

def ukladalne(u,s):
    s1 = slownik(u)
    s2 = slownik(s)
    for i in s:
        if s1[i] < s2[i]:
            return False
    return True

def zagadka(napis):
    s = {}
    t = []
    napis = napis.lower()
    for i in range (len(plik)):
        if ukladalne(napis,plik[i]):
            t.append(plik[i])
            tmp = list(plik[i])
            tmp.sort()
            pom = ''.join(tmp)
            s[pom] = plik[i]
    
    for i in range(len(t)):
        for j in range(i,len(t)):
            if ukladalne(napis,t[i]+t[j]) and len(napis) > len(t[i]+t[j]):
                slowo = (usuwanie(napis,t[i]+t[j]))
                tmp = list(slowo)
                tmp.sort()
                slowo = ''.join(tmp)
                if slowo in s:
                    print(t[i]+' '+t[j]+' '+s[slowo])
                


zagadka('Małgorzata Cygan')
    