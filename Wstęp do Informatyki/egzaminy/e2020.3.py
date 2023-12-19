class TreeItem:
    def __init__(self,value):
        self.val = value
        self.left = None
        self.right = None

def wypisz(t,x):
    if t.val == x:
        return [t.val,True]
    if t.right != None and t.left != None:
        prawa = wypisz(t.right,x)
        lewa = wypisz(t.left,x)
        if lewa[1] == False and prawa[1] == False:
            return [[0], False]
        elif lewa[1] == True :
            return [[lewa[0],t.val],True]
        else:
            return [[prawa[0],t.val],True]
    elif t.right != None:
        prawa = wypisz(t.right,x)
        if prawa[1] == True:
            return [[prawa[0],t.val],True]
        else:
            return [0],False
    elif t.left != None:
        lewa = wypisz(t.left,x)
        if lewa[1] == True:
            return [[lewa[0],t.val],True]
        else:
            return [[0],False]
    else:
            if t.val == x:
                return [[t.val],True]
            else:
                return [[0],False]

t = TreeItem(1)
t.left = TreeItem(9)
t.right = TreeItem(7)
t.right.right = TreeItem(19)
t.left.left = TreeItem(11)
t.left.left.left = TreeItem(4)
t.left.right = TreeItem(3)
t.left.right.left = TreeItem(2)
t.left.right.left.right = TreeItem(5)

print(wypisz(t,4))