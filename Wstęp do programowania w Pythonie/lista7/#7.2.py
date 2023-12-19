from turtle import *
import random
import numpy as np
plik = open('obrazek.txt').readlines() # wiersze od 0 do 62

#speed('fastest')
tracer(0,1)
goto(0,0)


def kwadrat(kolor):
    colormode(255)
    down()
    fillcolor(kolor)
    begin_fill()
    for i in range(4):
        fd(10)
        rt(90)
    end_fill()
    up()

t = [[1]*52 for i in range(62)]
i = 0

while i<33340:
    j = random.randint(0,61)
    k = random.randint(0,51)
    while t[j][k] == 0:
        j = random.randint(0,61)
        k = random.randint(0,51)
    t[j][k] = 0
    i = i+1
    wpliku = plik[j].split()
    a = wpliku[k]
    kolor = eval(a)
    up()
    goto(j*10,k*10)
    down()
    kwadrat(kolor)
    
    
    
input()    








