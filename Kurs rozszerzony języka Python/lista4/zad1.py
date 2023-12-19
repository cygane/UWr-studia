import timeit

def czy_pierwsza(n):
    for i in range(2,n):
        if n % i == 0:
            return False
    return True

def pierwsze_imperatywna(n):
    res = []
    for i in range(2,n+1):
        if czy_pierwsza(i) == True:
            res.append(i)
    return res

def pierwsze_skladana(n):
    res = [i for i in range(2,n+1) if all(i%j != 0 for j in range(2, i))]
    return res

def pierwsze_funkcyjna(n):
    before = list(range(2,n+1))
    res = list(filter(lambda x: 0 not in [x % i for i in range(2, x)], before))
    return res


print(" n        skladana      imperatywna      funkcyjna    ")
for i in range(10,91,10):
    print(str(i),":     ", round(timeit.timeit(lambda: pierwsze_skladana(i), number=5),6),"     ",
    round(timeit.timeit(lambda: pierwsze_imperatywna(i), number=5),6), "      ", 
    round(timeit.timeit(lambda: pierwsze_funkcyjna(i),number=5),6))


