#2.1
#szachownica

n=int(input('Podaj n:'))
k=int(input('Podaj k:'))

def szachownica(n,k):
    for i in range (n):
        for j in range(k):
            print(n*(k*' '+k*'#'))
        for j in range(k):
            print(n*(k*'#'+k*' '))

print(szachownica(n,k))
