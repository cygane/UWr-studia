'''
Julia Cygan
lista1 : zadanie 2
python 3.10.7
'''

def ulamek(l,m):
    u = [l,m]
    return u
    

def show(u):
    print(u[0],' / ',u[1])

def nowy_ulamek(u):
    a = u[0]
    b = u[1]
    while b:
        a, b = b, a%b

    u1 = [0,0]
    
    u1[0] = u[0] // a
    u1[1] = u[1] // a
    return u1

def dodawanie1(u1,u2):
    u3 = [0,0]
    u3[1] = u1[1] * u2[1]
    u3[0] = u1[0] * u2[1] + u2[0] * u1[1]
    return u3

def dodawanie2(u1,u2):
    u2[0] = u1[0] * u2[1] + u2[0] * u1[1]
    u2[1] = u2[1] * u1[1]
    return u2

def odejmowanie1(u1,u2):
    u3 = [0,0]
    u3[1] = u1[1] * u2[1]
    u3[0] = u1[0] * u2[1] - u2[0] * u1[1]
    return u3

def odejmowanie2(u1,u2):
    u2[0] = u1[0] * u2[1] - u2[0] * u1[1]
    u2[1] = u1[1] * u2[1]
    return u2

def mnozenie1(u1,u2):
    u3 = [0,0]
    u3[0] = u1[0] * u2[0]
    u3[1] = u1[1] * u2[1]
    return u3

def mnozenie2(u1,u2):
    u2[0] = u1[0] * u2[0]
    u2[1] = u1[1] * u2[1]
    return u2

def dzielenie1(u1,u2):
    u3 = [0,0]
    u3[0] = u1[0] * u2[1]
    u3[1] = u1[1] * u2[0]
    return u3

def dzielenie2(u1,u2):
    pom = u2[0]
    u2[0] = u1[0] * u2[1]
    u2[1] = u1[1] * pom
    return u2

#testowanie
#ul = ulamek(2,4)
#ul2 = ulamek(1,3)
#show(ul)
#show(ul2)
#ul = nowy_ulamek(ul)
#show(ul)
#print(dzielenie2(ul,ul2))
#show(ul2)
#print(odejmowanie1(ul,ul2))
#print(mnozenie1(ul,ul2))
#print(dzielenie1(ul,ul2))


