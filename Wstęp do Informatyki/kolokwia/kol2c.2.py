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
        

def usunOstPar(lista):
    if lista.next == None:
        if lista.val % 2 == 0:
            lista = lista.next
    else:
        prev = None
        while lista.next != None:
            if lista.next.val % 2 == 0:
                prev = lista  
            lista = lista.next
        if prev != None:
            prev.next = lista.next

lista = ListItem(1)
add(lista,3)
add(lista,5)
#add(lista,4)
#add(lista,3)
wyp(lista)
usunOstPar(lista)
wyp(lista)



