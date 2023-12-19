from collections import defaultdict as dd
plik = open('tranzakcje.txt').readlines()

def key(d,val):
    keys = [k for k,v in d.items() if v == val]
    return keys[0]

def ile():
    s = dd(lambda:0)
    for i in range(len(plik)):
        if plik[i][0] != '#':
            if plik[i][0] == '+':
                a = plik[i].split()
                if a[1] in s:
                    s[a[1]] += int(a[2])
                else:
                    s[a[1]] = 0
            else:
                a = plik[i].split()
                if a[0] in s:
                    s[a[0]] -= int(a[2])
                else:
                    s[a[0]] = -int(a[2])
                
                if a[1] in s:
                    s[a[1]] += int(a[2])
                else:
                    s[a[1]] = int(a[2])
    m = max(s.values())
    print(key(s,m),m)


ile()   

tekst = '''+ Jaś 20
+ Basia 10
Jaś Małgosia 10
Małgosia Basia 7
Basia Jaś 3
# liczba na dzisiaj:'''

for i in range(1,100000000):
    a = str(hash(tekst+str(i)))
    if '7777777' in a:
        print(a)
        
