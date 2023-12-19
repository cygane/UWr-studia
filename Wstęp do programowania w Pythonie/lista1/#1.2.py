#1.2
#silnia do 100

n=4
a=1
b=2

for i in range (97):
    for j in range(n-1):
        a=a*b
        b=b+1
    if len(str(a))%100==12 or len(str(a))%100==13 or len(str(a))%100==14:
        print(n,'! ma ',len(str(a)),' cyfr')
    elif len(str(a))%10==2 or len(str(a))%10==3 or len(str(a))%10==4:
        print(n,'! ma ',len(str(a)),' cyfry')
    else:
        print(n,'! ma ',len(str(a)),' cyfr')
    a=1
    b=2
    n=n+1


            

