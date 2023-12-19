from collections import defaultdict as dd

def slownik(slowo):
    s = dd(lambda: 0)
    ktory = 1
    for i in slowo:
        if i not in s:
            s[i] = str(ktory)
            ktory += 1 
    return s

def ppn(napis):
    s = slownik(napis)
    a = ''
    ile = 0
    for c in napis:
        if ile == len(napis) - 1:
            a+= s[c]
        else:
            a += s[c]+'-'
        ile += 1
    return a

print(ppn('indianin'))

