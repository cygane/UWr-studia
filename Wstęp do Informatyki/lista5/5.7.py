
def pot(a,b):
    if not b:
        return 1
    if b % 2:
        return a * pot(a*a,b//2)
    return pot(a*a,b/2)

def main(n,m):
    i = 1
    a = n
    while a < m:
        a = pot(a,i)
        i = i + 1
    print(i)

main(150,100000000000)


