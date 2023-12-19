#1.3
#krzyzyk(n)

n=int(input('Podaj n:'))

def krzyzyk():

    for i in range(n):
        print(n*' '+n*'*')

    for i in range (n):
        print (3*n*'*')

    for i in range(n):
        print(n*' '+n*'*')

print (krzyzyk())

