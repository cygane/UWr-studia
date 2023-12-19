import itertools
from collections import defaultdict as dd
plik = list(open('popularne_slowa.txt').read().split())

def slownik(slowo):
    s = dd(lambda: 0)
    for i in slowo:
        if i in s:
            s[i] += 1
        else:
            s[i] = 1
    return s

def uk(u,s):
    s1 = slownik(u)
    s2 = slownik(s)
    for i in s:
        if s1[i] != s2[i]:
            return False
    return True

def ukladalne(u,s):
    s1 = slownik(u)
    s2 = slownik(s)
    for i in s:
        if s1[i] < s2[i]:
            return False
    return True

def zagadka(napis):
    t = []
    napis = napis.lower()
    for i in range (len(plik)):
        if ukladalne(napis,plik[i]):
            t.append(plik[i])
    
    for i in range(len(t)):
        for j in range(i,len(t)):
            if uk(napis,t[i]+' '+t[j]) and len(napis) == len(t[i]+' '+t[j]):
                print(t[i]+' '+t[j])


zagadka('Małgorzata Cygan')
    