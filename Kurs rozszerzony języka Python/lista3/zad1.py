
def is_palindrom(s):
    return s == s[::-1]

def znajdz(tekst):
    palindromy = []
    for i in range(len(tekst)):
        for j in range (i+1, len(tekst) + 1):
            podciag = tekst[i:j]
            if is_palindrom(podciag):
                palindromy.append((i,len(podciag)))

    if len(palindromy) == 0:
        return []

    maximum = max(krotka[1] for krotka in palindromy)
    palindromy = [(i,l) for i, l in palindromy if l == maximum]
    return palindromy
    

print(znajdz("Kasia sprzedala sedes i kajak swojemu bratu."))
print(znajdz("fjgyu i hjfu a lkjhu c "))