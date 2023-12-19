



def caesar(s,k):
    slownik = {}
    napis = ''
    alfabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż'
    d = len(alfabet)
    for i in range(d):
        slownik[alfabet[i]] = alfabet[i-k]

    for a in s:
        napis += slownik[a]

    
    return slownik

print(caesar('lymłb', 2))


    