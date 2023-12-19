
from turtle import *
import random

kolory = [ 'yellow' , 'brown' , 'red' , 'violet' , 'green' , 'blue']

speed('fastest')

def kwadrat():
    fillcolor(random.choice(kolory))
    begin_fill()
    for i in range(3):
        fd(40)
        rt(90)
    fd(40)
   
    end_fill()

def trojkat():
    fillcolor(random.choice(kolory))
    begin_fill()
    rt(30)
    fd(40)
    rt(120)
    fd(40)
    
    end_fill()

def obrot1():
    lt(90)
    fd(40)
    lt(90)
    fd(40)
    lt(180)


def obrot2():
    rt(120)
    fd(40)
    rt(30)
    fd(40)
    rt(90)

liczby = [1 , 2]
def wezyk(n):
    for i in range(n):
        kwadrat()
        trojkat()
        if random.choice(liczby) == 1:
            obrot1()
        else:
            obrot2()
    kwadrat()
        
        
wezyk(15)
input()
        

    


