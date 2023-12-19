

def g(n):
    a = 1
    b = 1
    c = 1
    if n == 0 or n == 1 or n == 2:
        return 1
    else:
        i = 3
        while i <= n:
            pom = c
            c = a+b+c
            a = b
            b = pom
            i = i + 1
        return c


    
print(g(5))


