from turtle import *
import numpy as np


def kolory(ile):
    kolor1 = np.array([1,1,0.5])
    kolor2 = np.array([0.5, 0, 0.5])
    N = 20
    mieszanka = 0
    for i in range(ile):
        alfa = i / N
        mieszanka = (1-alfa) * kolor1 + alfa * kolor2
    return mieszanka


def kwadraty(n):
    pensize(4)
    begin_fill()
    fillcolor(kolory(1))
    for i in range(4):
        fd(40)
        rt(90)
    end_fill() 
    fd(40)
    begin_fill()
    fillcolor(kolory(2))
    for i in range(4):
        fd(40)
        rt(90)
    end_fill() 
    fd(40)
    rt(90)
    fd(40)
    begin_fill()
    fillcolor(kolory(3))
    for i in range(4):
        fd(40)
        rt(90)
    end_fill() 
    fd(40)
    begin_fill()
    fillcolor(kolory(4))
    for i in range(4):
        fd(40)
        rt(90)
    end_fill() 
    j = 3
    i = 4
    k = 5
    fd(40)
    while i < n:
        rt(90)
        fd(40)
        for v in range (j):
            begin_fill()
            fillcolor(kolory(k))
            for i in range(4):
                fd(40)
                rt(90)
            end_fill() 
            fd(40)
        j = j + 1  
        i = i + 1
        k = k + 1
       
        
speed('fastest')  
print (kwadraty(5))  
