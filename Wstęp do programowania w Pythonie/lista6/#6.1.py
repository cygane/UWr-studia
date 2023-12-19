import random
from turtle import *
from duze_cyfry import daj_cyfre

kolory = ['orange' , 'pink' , 'blue' , 'green', 'yellow' ]

tracer(0,1)
#speed('fastest')
a = [[' ']*52 for i in range(52)]

def kwadrat(kolor):
    fillcolor(kolor)
    begin_fill()
    for i in range(4):
        fd(10)
        rt(90)
    end_fill()


def czywolne (x, y, cyfra,kolor):
    for i in range(5):
        for j in range(5):
            if daj_cyfre(cyfra)[i][j] == '#' and a[i+x][j+y] != ' ':
                return False
            elif a[i+x+1][j+y] == kolor or a[i+x-1][j+y] == kolor or a[i+x][j+y+1] == kolor or a[i+x][j+y-1] == kolor:
                return False
    return True

def tablica(x,y,cyfra,kolor):
    for i in range(5):
        for j in range(5):
            if daj_cyfre(cyfra)[i][j] == '#':
                a[i+x][j+y] = kolor

def wszystko():
   
    for i in range(2000):
        x = random.randint(1,46)
        y = random.randint(1,46)
        kolor = random.choice(kolory)
        cyfra = random.randint(0,9)
        if czywolne(x,y,cyfra,kolor) == True:
            tablica(x,y,cyfra,kolor)
    
    for j in range(52):
        for i in range(52):
            if a[j][i] != ' ':
                up()
                goto((i)*10-200,250-j*10)
                down()
                kwadrat(a[j][i])
                up()
        



wszystko()
input()








    
