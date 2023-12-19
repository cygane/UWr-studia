from turtle import *
import time 

speed('fastest')

def tarcza():
    pencolor('black')
    R = 150
    k = 6
    up()
    lt(90)
    fd(R)
    rt(180)
    for i in range (60):
        if i % 5 == 0:
            up()
            fd(R-20)
            down()
            fd(20)
            lt(180)
            up()
            fd(R)
            rt(180)
            lt(k)
        else:
            up()
            fd(R-10)
            down()
            fd(10)
            lt(180)
            up()
            fd(R)
            rt(180)
            lt(k)

def zegar(h,m,s):
    pencolor('black')
    if h > 12:
        h = h - 12
    R = 150
    k = 6
    sek = 130
    min = 120
    g = 80
    rt(180)
    rt(m*6)
    down()
    fd(min)
    up()
    rt(180)
    fd(min)
    rt(180)
    lt(m*6)
    rt(h*30+m/2)
    down()
    fd(g)
    rt(180)
    up()
    fd(g)
    lt(h*30+m/2)
    rt(s*6)
    down()
    pencolor('red')
    fd(sek)
    up()
    pencolor('black')
    
while 1 == 1:
    home()
    a = time.time() 
    res = time.localtime(a)
    tracer(0,0)
    tarcza()   
    zegar(res.tm_hour, res.tm_min, res.tm_sec)
    hideturtle()
    update()
    clear()
    time.sleep(0.1)



    

        

    

        




