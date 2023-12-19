import math

class R:
    def __init__(self,l,m):
        self.licznik = l
        self.mianownik = m

def skracanie(l,m):
    nwd = math.gcd(l,m)
    l //= nwd
    m //= nwd
    return (l,m)

def skroc(x):
    nwd = math.gcd(x.licznik,x.mianownik)
    x.licznik //= nwd
    x.mianownik //= nwd
    return R(x.licznik,x.mianownik)

def mnozenie(x,y):
    gora = x.licznik * y.licznik
    dol = x.mianownik * y.mianownik
    return skracanie(gora,dol)

def dodawanie(x,y):
    gora = x.licznik * y.mianownik + y.licznik * x.mianownik
    dol = x.mianownik * y.mianownik
    return skracanie(gora,dol)

def dzielenie(x,y):
    gora = x.licznik * y.mianownik
    dol = x.mianownik * y.licznik
    return skracanie(gora,dol)

def porownywanie(x,y): 
    x = skroc(x)
    y = skroc(y) 
    gorax = x.licznik * y.mianownik
    goray = y.licznik * x.mianownik
    if gorax == goray:
        return 'Są równe'
    elif gorax > goray:
        print('(',x.licznik,',',x.mianownik,') jest większy')
        return True
    else:
        print('(',y.licznik,',',y.mianownik,') jest większy')
        return True

u1 = R(3,4)
u2 = R(8,10)

#porownywanie(u1,u2)

#print(dzielenie(u1,u2))
#print(dodawanie(u1,u2))
#print(mnozenie(u1,u2))


