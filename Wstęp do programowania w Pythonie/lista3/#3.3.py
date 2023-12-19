

def usun_w_nawiasach(s):
    napis = ''
    i = 0
    while i < len(s):
        if s[i] == '(':
            j = i+1
            while s[j] != ')':
                j = j+1
            i = j
        else:
            napis = napis+s[i]
        i = i+1
    return napis



print (usun_w_nawiasach('Ala ma kota(perskiego)!'))
print (usun_w_nawiasach('(Perskiego)kota Ala ma!'))
print (usun_w_nawiasach('Perskiego kota Ala ma(!)'))
print (usun_w_nawiasach('Perskiego kota Ala ma()'))
print (usun_w_nawiasach('()Perskiego kota Ala ma(!)'))