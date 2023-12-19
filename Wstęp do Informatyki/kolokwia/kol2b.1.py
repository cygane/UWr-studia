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

def usuwaj(L):
    if L.next == None:
        if L.val % 2 == 0:
            L.val = L.next
    else:
        while L.next != None:
            if L.val % 2 == 0:
                L.val = L.next.val
                L.next = L.next.next
            L = L.next
    

lista = ListItem(2)
add(lista,3)
#add(lista,5)
#add(lista,4)
#add(lista,3)
wyp(lista)
usuwaj(lista)
wyp(lista)