from turtle import *
import math


bok = 20
def kwadrat(bok):
    for j in range(10):
        for i in range(4):
            fd(bok)
            rt(90)
        fd(bok//2)
        rt(45)
        bok = bok/math.sqrt(2)

kwadrat(200)
