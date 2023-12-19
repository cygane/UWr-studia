
def F(n):
    if n % 2 == 0:
        return n / 2
    else:
        return 3 * n + 1

def energia(n):
    energia = 1
    while F(n) != 1:
        n = F(n)
        energia = energia + 1
    return energia

def analiza_collatza(a,b):
    list = []
    srednia = 0
    max = 0
    min = 10**6
    while a <= b:
        list.append(energia(a))
        srednia += energia(a)
        a = a + 1
    s = sorted(list)
    if len(s) % 2 == 0:
        print('Mediana: ', (s[(len(s)) // 2] + s[((len(s)) // 2) - 1]) / 2)
    else :
        print('Mediana: ', s[(len(s)) // 2])
    print ('Średnia energi: ',srednia / len(list))
    print ('Minimum: ',s[0])
    print ('Maximum: ',s[len(list) - 1])
    print (s)

   



analiza_collatza(4,9)
    
