from turtle import *
import numpy as np
plik = open('obrazek.txt').readlines() # wiersze od 0 do 62

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

j = 0
while j < 63:
    wpliku = plik[j].split()
    k = 0
    for i in range(len(wpliku)):
        a = wpliku[i]
        kolor = eval(a)
        k = k+1
        kwadrat(kolor)
        goto(j*10,k*10)
    j = j+1
    goto(j*10,0)

input()

    
    
    
    





