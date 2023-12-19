
lista = []

def podziel(napis):
    a = ''
    i = 0
    while i < len(napis):
        while napis[i] != ' ':
            a = a + napis[i]
            i = i + 1
        if a != '':
            lista.append(a)
        a = ''
        i = i + 1
    return lista

print (podziel("  Ala    ma     kota "))


