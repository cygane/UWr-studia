
def tabliczka(x1, x2, y1, y2, skok):
    ilex = 1
    tx = [x1]
    #pierwszy wiersz
    while x1 + skok <= x2:
        x1 += skok
        ilex += 1
        tx.append(x1)


    #pierwsza kolumna
    iley = 1
    ty = [y1]
    while y1 + skok <= y2:
        y1 += skok
        iley += 1
        ty.append(y1)

    #obliczanie tabliczki mnozenia z zaokrągleniem
    dlugosc = 0
    tab = [[''] * (iley+1) for i in range(ilex+1)]
    for x in range (ilex+1):
        for y in range(iley+1):
            if x==0 and y==0:
                pass
            elif x == 0:
                wynik = 0
                wynik = round(ty[y-1],4)
                tab[x][y] = wynik
                if len(str(wynik)) > dlugosc:
                    dlugosc = len(str(wynik))
            elif y == 0:
                wynik = 0
                wynik = round(tx[x-1],4)
                tab[x][y] = wynik
                if len(str(wynik)) > dlugosc:
                    dlugosc = len(str(wynik))
            elif x!= 0 and y!= 0:
                wynik = 0
                wynik = round(tab[x][0] * tab[0][y],4)
                tab[x][y] = wynik
                if len(str(wynik)) > dlugosc:
                    dlugosc = len(str(wynik))

    #formatowanie liczb
    for i in range(ilex+1):
        for j in range(iley+1):
            if i == 0 and j == 0:
                tab[i][j] = ' ' * (dlugosc - 2)
            else:
                a = str(tab[i][j])
                if len(a) < dlugosc:
                    a += '0'* (dlugosc - len(a))
                tab[i][j] = a


    #wyświetlanie
    for i in range(ilex+1):
        for j in range(iley+1):
            if i==0 and j==0:
                print(' ',end = ' ')
            print(tab[i][j], end = ' ')
        print()

    
#testowanie
tabliczka(0.2,1.3,0.2,3.14,0.3)
tabliczka(3.0, 5.0, 2.0, 4.0, 1.0)
tabliczka(-5.0, -3.0, -4.0, 0, 1.0)