#2.3
n=int(input('Podaj n:'))
srodek=n//2
r=n/2
k=4
def kolko(n,k):
    srodek=n//2
    r=n/2
    for i in range(n):
        print(k*' ',end='')
        for j in range(n):
            if (i-srodek)*(i-srodek)+(j-srodek)*(j-srodek)<=r*r:
                print('#',end='')
            else:
                print(' ',end='')
            if j==n-1:
                print()



kolko(n,k)
kolko(n+2,k-1)
kolko(n+8,k-4)









