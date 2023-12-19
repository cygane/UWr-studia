from duze_cyfry import daj_cyfre
from turtle import *
import random

liczba = 345

speed('fastest')


def kwadrat():
  for i in range(4):
    fd(20)
    rt(90)


c = liczba
lista = []
while liczba > 0:
  lista.append(liczba % 10)
  liczba = liczba // 10

dlugosc = len(lista)
colormode(255)

for i in range(dlugosc):
  a = random.randint(0,255)
  b = random.randint(0,255)
  c = random.randint(0,255)
  for i in range(5):
    for c in range(5):
      if daj_cyfre(lista[dlugosc-1])[i][c] == '#':
        fillcolor(a,b,c)
        begin_fill()
        kwadrat()
        end_fill()
        fd(20)
      else:
        up()
        fd(20)
        down()
    up()
    rt(90)
    fd(20)
    rt(90)
    fd(100)
    rt(180)
    down()
  dlugosc = dlugosc - 1
  up()
  fd(120)
  lt(90)
  fd(100)
  rt(90)
  down()

input() 
    