from murek import murek
from murek import kwadrat
from turtle import *
import random

colors = ['red', 'green','blue','yellow','orange', 'cyan']

def kolor():
    kolory = []
    ile = random.randint(2,7)
    for i in range(ile):
        kolory.append(random.choice(colors))
    return kolory

def rysunek(kwadracik):
    kolory = []
    boki = random.randint(17,23)
    powtorzenia = random.randint(10,17)
    a = ''
    if kwadracik:
        a = ''
        for i in range(boki):
            a += 'f'
        a += 'r' 
        a = a*4
    else :
        a = ''
        for i in range(powtorzenia):
            for j in range(boki):
                a += 'f' 
            boki -= 1
            a += 'r'
    kolory = len(a)*kolor()
    print(murek(a,boki,kolory))

home()
tracer(0,1)

rysunek()

ht()
