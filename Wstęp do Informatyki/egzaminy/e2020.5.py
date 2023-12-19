
b = [-1,-1,-1,-1,-1]
suma = [0,0,0,0,0]
n = 5

def isfree(x,y):
    for i in range(x):
        if (b[i] == y):
            return 0
    return 1


def nawroty():
    s = 10
    n = 5
    X = [[1,1,2,1,1],[2,1,1,1,1],[0,2,1,1,1],[0,1,1,2,1],[2,0,1,1,2]]
    b[0] = 0
    k = 1
    while k < n and k >= 0 :
        b[k] += 1
        while b[k] < n and not isfree(k,b[k]):
            b[k] += 1
        if b[k] < n :
            ss = 0
            suma[k] = X[b[k]][k]
            for i in range(n):
                ss += suma[i]
            if k == n-1 and ss == s:
                break
            if ss > s or (k == n-1 and ss != s):
                b[k] = -1
                suma[k] = 0
                k -= 1
            else:
                k += 1
        else:
            b[k] = -1
            suma[k] = 0
            k -= 1
      
        
       


nawroty()
k = 0
for i in range(n):
    if b[i] < 0:
        k = 5
        print(0)
        break
if k != 5:
    print(1)
