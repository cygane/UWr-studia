a = int(input('Podaj a:'))

def erastotenes(a):
    lista = []
    for i in range(a+1):
        if i != 1:
            lista.append(i)
        else:
            lista.append(0)
        
    
    for i in range(len(lista)):
        if lista[i] != 0:
            wyz = lista[i] 
            j = i * i
            while j < len(lista):
                lista[j] = 0
                j = j + i
    return lista
        
x = erastotenes(a)
dzielniki = [1]
for j in range (len(x)):
    if x[j] != 0 and a % x[j] == 0:
        dzielniki.append(x[j])


print (dzielniki)

