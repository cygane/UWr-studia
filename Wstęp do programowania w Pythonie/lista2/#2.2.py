#2.2
#koperta

n=int(input('Podaj n:'))
spacja=0
srodek=0
ile=0

def koperta(n):
    spacja=0
    if n>1:
       srodek=2*n-3
    print((2*n+1)*'*')
    for i in range((2*n-1)//2):
        print('*'+spacja*' '+'*'+srodek*' '+'*'+spacja*' '+'*',)
        srodek=srodek-2
        spacja=spacja+1
    print('*'+((2*n-2)//2)*' '+'*'+((2*n-2)//2)*' '+'*')
    for i in range((2*n-1)//2):
        srodek=srodek+2
        spacja=spacja-1
        print('*'+spacja*' '+'*'+srodek*' '+'*'+spacja*' '+'*',)
    print((2*n+1)*'*')
            

            
            
koperta(n)