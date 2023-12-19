from collections import defaultdict as dd

def slownik(slowo):
    s = dd(lambda: 0)
    for i in slowo:
        if i in s:
            s[i] += 1
        else:
            s[i] = 1
    return s

def ukladalne(u,s):
    s1 = slownik(u)
    s2 = slownik(s)
    for i in s:
        if s1[i] < s2[i]:
            return False
    return True
    
    
print(ukladalne('lokomotywa','kot'))

        
    