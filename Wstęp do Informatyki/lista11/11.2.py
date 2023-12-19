#Napisz funkcję, która dla parametru t wskazującego na korzeń drzewa binarnego zwraca 
#jako wartość liczbę elementów w drzewie o korzeniu t

class TreeItem:
    def __init__(self,value):
        self.val = value
        self.left = None
        self.right = None
    
def insert( root, nkey):
    if (root==None): 
        return TreeItem(nkey) 
    if (nkey < root.val):
        root.left = insert(root.left, nkey) 
    else:
        if (nkey > root.val):
            root.right = insert(root.right, nkey)
    return root

def write(root): 
    if (root!=None):
        write( root.left) 
        print (root.val) 
        write( root.right)

#zad2
#Napisz funkcję, która dla parametru t wskazującego na korzeń drzewa binarnego 
#zwraca jako wartość liczbę elementów w drzewie o korzeniu t
def ile(root):
    suma = 1
    if root.left!= None:
        suma += ile(root.left)
    if root.right != None:
        suma += ile(root.right)
    return suma

#zad3
#Napisz funkcję, która dla parametru t zwraca jako wartość wysokość drzewa o korzeniu t

def height(root):
    h = 0
    while root.left != None:
        root = root.left
        h += 1
    h2 = 0
    while root.right != None:
        root = root.right
        h2 += 1
    if h2 > h:
        return h2
    else:
        return h

#zad4
#Napisz funkcję, która dla parametru t opisującego drzewo BST wypisuje 
#(wporządku niemalejącym) wszystkie elementy dodatnie znajdujące się w drzewie o korzeniu t

def write2(root):
    if root.val <= 0:
        while root.val <= 0 :
            root = root.right
        if root.val != None:
            write( root.left) 
            print (root.val) 
            write( root.right)
            root = root.right
    else:
        if root.val != None:
            write( root.left) 
            print (root.val) 
            write( root.right)
            
        





tree = TreeItem(5)
insert((tree),-1)
insert(tree,2)
insert(tree,7)
#write(tree)
#print(height(tree))
drzewo = TreeItem(0)
insert(drzewo,-1)
insert(drzewo,1)
insert(drzewo,2)
insert(drzewo,3)
insert(drzewo,4)
#write(drzewo)
#print(write2(drzewo))
#print(write2(tree))
print(ile(drzewo))



