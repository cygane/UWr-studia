#3.1



def happy():
    licznik = 0
    a = 777
    for i in range (99233):
        k = 0
        d = 2
        liczba = a
        while d*d <= a:
            if a%d == 0:
                k = 3
                break
            d = d+1
        if k != 3:
            liczba = str(liczba)
            for j in range (len(liczba)-2):
                if liczba[j] == '7' and liczba[j+1] == '7' and liczba[j+2] == '7':
                    licznik = licznik + 1
                    print(liczba, end=' ')
                    break
        a = a+1
    print ('takich liczb jest:',licznik)


happy()
     

