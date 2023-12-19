from turtle import *
import numpy as np
import random

tracer(0,1)

def kwadrat(k):
    if k >= 0 and k < 0.2:
        kolor = 'green'
    elif k > 0.2 and k < 0.4:
        kolor = 'lightgreen'
    elif k >= 0.4 and k < 0.7:
        kolor = 'yellow'
    elif k >= 0.7 and k <= 0.85:
        kolor = 'orange'
    elif k > 0.85 and k <= 0.99:
        kolor = 'red'
    else:
        kolor = 'darkred'

    pencolor(kolor)
    fillcolor(kolor)
    begin_fill()
    for i in range(4):
        fd(10)
        rt(90)
    end_fill()

def mapa():
    m = [[0]*50 for i in range (50)]

    for i in range(2500):
        x = random.randint(2,47)
        y = random.randint(2,48)
        wys = random.randint(1,27)
        m[x][y] = wys/10
    
    for i in range(100000):
        x = random.randint(1,48)
        y = random.randint(1,48)
        #if x > 0 and x < 49 and y > 0 and y < 49:
        m[x][y] = (m[x][y] + m[x-1][y] + m[x+1][y] + m[x][y-1] + m[x][y+1] + m[x-1][y-1] + m[x+1][y+1] + m[x-1][y+1] + m[x+1][y-1])/9
        '''elif x == 0 and y == 0:
            m[x][y] = (m[x][y] + m[x][y+1] + m[x+1][y] + m[x+1][y+1])/4
        elif x == 49 and y == 49:
            m[x][y] = (m[x][y] + m[x][y-1] + m[x-1][y] + m[x-1][y-1])/4
        elif x == 0 and y != 49:
            m[x][y] = (m[x][y] + m[x][y-1] + m[x][y+1] + m[x+1][y+1] + m[x+1][y])/5
        elif x != 0 and y == 49:
            m[x][y] = (m[x][y] + m['''



    for i in range(50):
        for j in range(50):
            up()
            goto(i*10-200,250-j*10)
            down()
            kwadrat(m[i][j])
            up()

mapa()
input()

        
    