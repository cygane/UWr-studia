    class ListItem:
    def __init__(self,value):
        self.val = value
        self.next = None

def add(L,element):
    while L.next != None:
        L = L.next
    L.next = ListItem(element)

def wyp(L):
    while L.next != None:
        print(L.val, end = ' ')
        L = L.next
    print(L.val)

def usunMax(L):
    if L.next == None:
        L.val = L.next
        lista = L
    else:
        max = L
        while L.next != None:
            if L.next.val > max.val:
                max = L.next
                lista = L
            L = L.next
        lista.next = max.next
    return lista

lista = ListItem(7)
add(lista,6)
add(lista,2)
add(lista,4)    
add(lista,3)
lista2 = ListItem(1)
wyp(lista)
usunMax(lista)
wyp(lista)
