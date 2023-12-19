#1.4

from random import choice

fragmenty = "sia je ta da pra wie nie ce ca be ba bu ko rolo waje wsie fija kura kika fra fiu fu ra ro chry kawa kwa waka tra cny dze rze rzy grzy wsze ja na ma kre dy pu pi bi gra fra dro kila laki juki fika miki fiki we wa wu ku ka ra cza cze czu czte siu by bry bre bru  gi gida gafa fago zy za zi zie zimy cima cia ciu dziu".split()

def losuj_fragment():
     return choice(fragmenty)

c=int(input('Podaj c:'))

def losuj_haslo():
    n=c
    haslo=''
    while n>0:
        a=str(losuj_fragment())
        if n-len(a)>1 or n-len(a)==0:
            haslo=haslo+a
            n=n-len(a)
    return haslo

for i in range (10):
    print (losuj_haslo())


