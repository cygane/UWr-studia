import sys

class TreeItem:
    def __init__(self,value):
        self.val = value
        self.left = None
        self.right = None
    
def insert(root, nkey):
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

#zad1
#Do drzewa BST (na początku pustego) wstawiane są elementy 1, 2, 3, 4, 5, 6, 7. Podaj
#kolejność wstawiania elementów, przy której drzewo będzie miało największą / najmniejszą możliwą wysokość. 
#Odpowiedź uzasadnij i uogólnij na przypadek ciągu liczb 1,2,...,2k – 1 dla dowolnego naturalnego k >1
#największa wysokosc: rosnaco/ malejaco bo wtedy jest najmniej rozgalezien i pniemy sie tylko w gore albo tylko w dol
#najmniejsza wysokosc: za kazdym razem wyszukujemy srodkowy element/elementy, wtedy bedzie najwiecej galezi, bo liscie sa posrodku

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
    if (root!=None):
        write2(root.left) 
        if root.val > 0:
            print (root.val) 
        write2(root.right)

#zad5
#Napisz funkcję, która dla danego drzewa binarnego sprawdza czy jest ono drzewem BST

def is_BST(tree, max = sys.maxsize, min = -1*sys.maxsize):
    if tree > max or tree <min:
        return False
    if tree.left != None:  
        if tree.left.val > tree.val or not is_BST(tree.left,tree,min):
            return False
    if tree.right != None:
        if tree.right.val < tree.val or not is_BST(tree.right,max,tree):
            return False
    return True
        

#zad6
#Napisz funkcję, która łączy dwa drzewa BST w jedno drzewo przy założeniu, że największa 
#wartość klucza (val) w pierwszym drzewie jest mniejsza od najmniejszej wartości klucza w drugim drzewie.
#Czas działania Twojej funkcji powinien być O(h), gdzie h to wysokość pierwszego drzewa.

def extend(tree1,tree2):
    while tree1.right != None:
        tree1 = tree1.right
    tree1 = tree2
    return tree1
              
#zad7 
#Napisz funkcję wstawiającą element o podanym kluczu do drzewa BST bez użycia rekurencji

def insert2(tree, key):
    if tree == None:
        tree =  TreeItem(key)

    itr = tree

    while itr.right.right != None or itr.left.left != None:
        if itr.val == key:
            return
        if itr.val > key:
            itr = itr.right
        else:
            itr = itr.left

    if itr.val > key:
        itr.right = TreeItem(key)
    else:
        itr.left = TreeItem(key)

    

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
insert2(tree,6)
write(tree)
#write(drzewo)
#print(write2(drzewo))
#print(write2(tree))
#print(ile(drzewo))
#rotacja(tree,-1,2)
#print(write(tree))
#print(is_BST(drzewo))



