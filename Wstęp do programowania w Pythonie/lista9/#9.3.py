
#wprawka3 (FCH)

def eval_string(napis):
    napis = napis.split()
    wynik = 0
    pom = 0
    for i in range(len(napis)):
        pom = 0
        if napis[i] == '*':
            pom = int(napis[i-1]) * int(napis[i+1])
            napis[i-1] = ''
            napis[i] = ''
            napis[i+1] = pom
        elif napis[i] == '//':
            pom = int(napis[i-1]) // int(napis[i+1])
            napis[i-1] = ''
            napis[i] = ''
            napis[i+1] = pom
    j = 0
    while napis[j] == '':
        j = j + 1
    wynik = int(napis[j])
    for i in range(len(napis)):
        if napis[i] == '+':
            p = 0
            k = i + 1
            while napis[k] == '':
                k = k + 1
            p = int(napis[k])
            wynik += p
        elif napis[i] == '-':
            p = 0
            k = i + 1
            while napis[k] == '':
                k = k + 1
            p = int(napis[k])
            wynik = wynik - p
    return wynik
    
             
    

print(eval_string("4 // 3 + 1 - 5 * 2 + 2 * 3 * 4 // 8 - 1"))
