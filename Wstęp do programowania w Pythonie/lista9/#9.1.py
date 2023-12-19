from turtle import *

speed('fastest')
def trojkat(bok, n):
    if n == 0:
        for i in range(3):
            fd(bok)
            lt(120)
    else:
        trojkat(bok/2,n-1)
        fd(bok/2)
        trojkat(bok/2,n-1)
        bk(bok/2)
        lt(60)
        fd(bok/2)
        rt(60)
        trojkat(bok/2,n-1)
        lt(60)
        bk(bok/2)
        rt(60)

trojkat(100,5)
input()

