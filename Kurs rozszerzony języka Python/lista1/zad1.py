from decimal import *

def vat_faktura(lista):
    suma = 0
    for i in lista:
        suma += i
    return suma * 0.23

def vat_paragon(lista):
    suma = 0
    for i in lista:
        suma += i * 0.23
    return suma


zakupy = [0.2, 0.52, 4.59, 3.0] #dla takiej wartosci zakupy, program wypisze False
print(vat_faktura(zakupy) == vat_paragon(zakupy)) 

getcontext().prec = 2 #dla reprezentacji za pomocą decimal
print(Decimal(vat_faktura(zakupy)) * Decimal(1) == Decimal(vat_paragon(zakupy)) * Decimal(1))