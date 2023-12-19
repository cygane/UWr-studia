from turtle import *

tracer(0,1)

colors = {
   'r' : 'red', 
   'g' : 'green', 
   'b' : 'blue',
   'y' : 'yellow',
   'o' : 'orange', 
}

dane_o_rysunku = ['bobby' + 'bobby'+ 'bobby', 'rybogryby', 'grrrrrry', 'yo' * 10] * 2

def kwadrat():
    for i in range(4):
        fd(40)
        rt(90)

def kolko(napis):
    R = 90
    up()
    lt(90)
    fd(R)
    rt(180)
    fd(180)
    lt(180)
    for j in range(len(napis)):
        down()
        fillcolor(colors[napis[j]])
        begin_fill()
        kwadrat()
        end_fill()
        up()
        fd(R)
        rt(180)
        lt(360/len(napis))
        fd(R)
        lt(180)




def tarcza(L):
    up()
    goto(0,-700)
    r = 700
    up()
    lt(90)
    fd(r)
    rt(180)
    fd(180)
    lt(180)
    for k in range (len(L)):
        kolko(L[k])
        up()
        fd(r)
        rt(180)
        lt(360/len(L))
        fd(r)
        lt(180)







tarcza(dane_o_rysunku)
input()

