

cyfry = [0,1,2,3,4,5,6,7,8,9]
ile = [0,0,0,0,0,0,0,0,0,0]

def zroz(n,k,A):
    x = 0
    ind = -1
    for i in range(n):
        pom = A[i] % 10
        if ile[pom] == 0:
            x += 1
            ile[pom] += 1
            if x == k:
                ind = i
    if x < k:
        return 0
    else:
        return ind + 1


A = [ 5, 15, 5, 25, 17, 37, 275]
print(zroz(7,2,A))

    

