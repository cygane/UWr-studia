import random

arabia = ('Arabia_Saudyjska', 2, 3, 0.3, 0.3)
argentyna = ('Argentyna', 4, 6, 0.5, 0.8)
meksyk = ('Meksyk', 3, 4, 0.6, 0.5) 
polska = ('Polska', 2, 3, 0.9, 0.8)
grupa = [arabia, argentyna, meksyk, polska]

t = []
def mecz(a,b):
    for i in range(100000):
        golea = 0
        osa = 0
        osb = 0
        fda = a[1] + random.randint(1,6)
        faa = a[2] + random.randint(1,6)
        goleb = 0
        fdb = b[1] + random.randint(1,6)
        fab = b[2] + random.randint(1,6)
        if faa > fdb:
            osa = faa - fdb
        if fab > fda:
            osb = fab - fda
        for i in range(osa):
            bb = b[3]*random.random()
            ga = a[4]*random.random()
            if ga>bb:
                golea += 1
        for i in range(osb):
            ba = a[3]*random.random()
            gb = b[4]*random.random()
            if gb>ba:
                goleb += 1
        if golea > goleb:
            t.append(1)
        else:
            t.append(0)
    return sum(t)/len(t)

def meczyk(a,b):
    punktya = 0
    punktyb = 0
    bilansa = 0
    bilansb = 0
    golea = 0
    osa = 0
    osb = 0
    fda = a[1] + random.randint(1,6)
    faa = a[2] + random.randint(1,6)
    goleb = 0
    fdb = b[1] + random.randint(1,6)
    fab = b[2] + random.randint(1,6)
    if faa > fdb:
        osa = faa - fdb
    if fab > fda:
        osb = fab - fda
    for i in range(osa):
        bb = b[3]*random.random()
        ga = a[4]*random.random()
        if ga>bb:
            golea += 1
    for i in range(osb):
        ba = a[3]*random.random()
        gb = b[4]*random.random()
        if gb>ba:
            goleb += 1
    if golea > goleb:
        punktya += 3
        bilansa = golea-goleb
        bilansb = goleb - golea
    elif golea == goleb:
        punktya += 1
        punktyb += 1
    else:
        punktyb += 3
        bilansa = golea-goleb
        bilansb = goleb - golea
    return punktya,punktyb,bilansa,bilansb,golea,goleb
        


#print(mecz(polska,argentyna))
wynikip = []
wynikib = []
for i in range(4):
    wynikip.append(0)
    wynikib.append(0)


def rozgrywki_grupowe(druzyny, czy):
    wynikimeczow = []
    for i in range(len(druzyny)-1):
        for j in range(i+1,len(druzyny)):
            wynikip[i] += meczyk(druzyny[i],druzyny[j])[0]
            wynikip[j] += meczyk(druzyny[i],druzyny[j])[1]
            wynikib[i] += meczyk(druzyny[i],druzyny[j])[2]
            wynikib[j] += meczyk(druzyny[i],druzyny[j])[3]
            wynikimeczow.append((grupa[i][0],grupa[j][0],meczyk(druzyny[i],druzyny[j])[4],meczyk(druzyny[i],druzyny[j])[5]))
        
    if czy :
        print (wynikimeczow)
    else:
        return wynikip,wynikib
    



tabela = []
historia = []
#tabela2 = []
for i in range(4):
    tabela.append((rozgrywki_grupowe(grupa,False)[0][i],rozgrywki_grupowe(grupa,False)[1][i],grupa[i][0]))
    #historia.append(rozgrywki_grupowe(grupa)[0][i])
    #tabela.append(rozgrywki_grupowe(grupa)[1][i],grupa[i])


print(tabela)
print(rozgrywki_grupowe(grupa, True))

for i in range(len(tabela)-1):
    for j in range(i+1,len(tabela)):
        if tabela[i][0] < tabela[j][0]:
            pom = tabela[j]
            tabela[j]= tabela[i]
            tabela[i] = pom
        elif tabela[i][0] == tabela[j][0]:
            if tabela[i][1] < tabela[j][1]:
                pom = tabela[j]
                tabela[j]= tabela[i]
                tabela[i] = pom
            if tabela[i][1] == tabela[j][1] and random.randint(0,1)==0:
                pom = tabela[j]
                tabela[j]= tabela[i]
                tabela[i] = pom

print(tabela)






#print(wynikimeczow)
#print(tabela2)

#print (rozgrywki_grupowe(grupa)[0])
#print (rozgrywki_grupowe(grupa)[1])
#print (grupa)







    
