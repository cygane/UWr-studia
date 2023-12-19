from turtle import *
import random
import time
from copy import deepcopy

tracer(0,1)
txt1 = """
...kkkkkkkkkkkk.......
......................
......................
......................
..nnnn................
..nnnn................
..n...................
......................
.........kkkkkkkkkkk..
......................
......................
......................
......................
.........ppppp........
......................

"""

txt = """
...kkkkkkkkkkkk.......
......................
......................
......................
..k...................
..kkk.................
..k...................
......................
.........kkkkkkkkkkk..
......................
.....pp...............
......................
......................
......................

"""


tab = [list(wiersz) for wiersz in txt.split()]
tab.reverse()

MY = len(tab) 
MX = len(tab[0]) 


def sila(tab):
    t = [[0]*MX for i in range(MY)]
    for y in range(MY):
        for x in range(MX):
            if tab[y][x] == 'n' or tab[y][x] == 'k' or tab[y][x] == 'p':
                t[y][x] = random.randint(1,5)
    return t
    
sila = sila(tab)

def kwadrat(y,x,kolor):
    up()
    goto(20*y,20*x)
    down()
    fillcolor(kolor)
    begin_fill()
    for i in range(4):
        fd(20)
        lt(90)
    end_fill()
    up()

#kamien - zolty,nozyce-zielony,papier-niebieski
def rysuj_plansze(tab):
    clear()
    for y in range(MY):
        for x in range(MX):
            if tab[y][x] == 'n':
                kolor = 'green'
            elif tab[y][x] == 'k':
                kolor = 'yellow'
            elif tab[y][x] == 'p':
                kolor = 'blue'
            else:
                kolor = 'pink'
            kwadrat(y, x, kolor)
                   
    update() 

def pusta_plansza():
    return [ MX * ['.']  for y in range(MY)]

historia = set()
def losowanie(y,x):
    if x == 0 and y == 0:
        k = random.randint(1,2)
        if k == 1:
            lx = 0
            ly = 1
        else:
            lx = 1
            ly = 0
    elif y == 0 and x == MY - 1:
        k = random.randint(1,2)
        if k == 1:
            ly = 0
            lx = MY - 2
        else:
            ly = 1
            lx = MY - 1
    elif y == MY - 1 and x == 0:
        k = random.randint(1,2)
        if k == 1:
            ly = MY - 2
            lx = 0
        else:
            ly = MY - 1
            lx = 1
    elif y == MY - 1 and x == MY - 1:
        k = random.randint(1,2)
        if k == 1:
            ly = MY - 1
            lx = MY - 2
        else:
            ly = MY - 2
            lx = MY - 1
    elif y == 0:
        k = random.randint(1,3)
        if k == 1:
            ly = y + 1
            lx = x
        elif k == 2:
            ly = y
            lx = x + 1
        else:
            ly = y
            lx = x - 1
    elif y == MY - 1:
        k = random.randint(1,3)
        if k == 1:
            ly = y 
            lx = x - 1
        elif k == 2:
            ly = y - 1
            lx = x
        else:
            ly = y
            lx = x + 1
    elif x == 0:
        k = random.randint(1,3)
        if k == 1:
            ly = y - 1
            lx = x
        elif k == 2:
            ly = y
            lx = x + 1
        else:
            ly = y + 1
            lx = x 
    elif x == MY - 1:
        k = random.randint(1,3)
        if k == 1:
            ly = y - 1
            lx = x
        elif k == 2:
            ly = y + 1
            lx = x 
        else:
            ly = y
            lx = x - 1
    else:
        k = random.randint(1,4)
        if k == 1:
            ly = y 
            lx = x + 1
        elif k == 2:
            ly = y 
            lx = x - 1
        elif k == 3:
            ly = y - 1
            lx = x 
        else:
            ly = y + 1
            lx = x
    return ly,lx


while True:
    
    
    rysuj_plansze(tab)
    nowa = deepcopy(tab)
    
    for y in range(MY):
        for x in range(MX):
            if tab[y][x] == 'n' or tab[y][x] == 'k' or tab[y][x] == 'p':
                ly = losowanie(y,x)[0]
                lx = losowanie(y,x)[1]
                if tab[ly][lx] == '.' and sila[y][x] > 1:
                    nowa[ly][lx] = tab[y][x]
                    sila[ly][lx] = sila[y][x] - 1
                elif tab[ly][lx] != '.' and tab[ly][lx] != tab[y][x]:
                    if tab[ly][lx] == 'k':
                        if tab[y][x] == 'n':
                            sila[ly][lx] += 1
                            sila[y][x] -= 1
                        else:
                            sila[ly][lx] -= 1
                            sila[y][x] += 1 
                    elif tab[ly][lx] == 'p':
                        if tab[y][x] == 'k':
                            sila[ly][lx] += 1
                            sila[y][x] -= 1
                        else:
                            sila[ly][lx] -= 1
                            sila[y][x] += 1 
                    elif tab[ly][lx] == 'n':
                        if tab[y][x] == 'p':
                            sila[ly][lx] += 1
                            sila[y][x] -= 1
                        else:
                            sila[ly][lx] -= 1
                            sila[y][x] += 1  
                elif tab[ly][lx] == tab[y][x]:
                    nowa[ly][lx] = tab[ly][lx]
                    nowa[y][x] = tab[y][x]
                    
                if tab[y][x] == 0:
                    nowa[y][x] = '.'
                if tab[ly][lx] == 0:
                    nowa[y][x] = '.'
                if sila [y][x] > 5:
                    sila[y][x] = 5
                if sila[ly][lx] > 5:
                    sila[ly][lx] = 5
    
                   
    tab = nowa
    time.sleep(0.03)         
    
print ('Koniec')
input()  
