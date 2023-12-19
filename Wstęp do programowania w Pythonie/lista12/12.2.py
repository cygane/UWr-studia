def in_tree(tree, e):
    if tree == []:
        return False
    n, left, right = tree
    if n == e:
        return True
    if e < n:
        return in_tree(left, e)
    return in_tree(right, e)

def tree_to_list(tree):
    if tree == []:
        return []
    n, left, right = tree
    return tree_to_list(left) + [n] + tree_to_list(right)

def add_to_tree(e, tree):
    if tree == []:
        tree += [e, [], []]
        return
    x, left, right = tree
    if e < x:
        add_to_tree(e, left)
    elif e > x:
        add_to_tree(e, right)



class Set:
    def __init__(self, *elems):
        self.tree = []
        for e in elems:
            self.add(e)
            
    def add(self, e):
        add_to_tree(e, self.tree)    
        
    def __contains__(self, e):
        return in_tree(self.tree, e) 
        
    def __str__(self):
        return f'Set({tree_to_list(self.tree)})'    
        
    def __or__(self, other):
        new = Set(*tree_to_list(self.tree))
        for e in tree_to_list(other.tree):
            new.add(e)
        return new    
        
    def __len__(self):
        suma = 0
        for e in tree_to_list(self.tree):
            suma += 1
        return suma

    def __sub__(self,other): 
        new = Set(*tree_to_list([]))
        now = Set(*tree_to_list(other.tree))
        for e in tree_to_list(self.tree):
            if e  not in now :
                new.add(e)
        return new

    def __and__(self,other):
        new = Set(*tree_to_list([])) 
        s = Set(*tree_to_list(other.tree))
        for e in tree_to_list(self.tree):
            if e in s:
                new.add(e)
        return new
    
zbior = Set(1,4,5,3,3,5,1,1,1,8) 

print(zbior)

#for i in range(7):
    #print (i, i in zbior)       
        
#print (Set(1,2,3,4,4,4) | Set(3,44,4,4,5))
#print (Set(1,2,3,4,4,4,8) - Set(3,44,4,4,5))
#print(len(Set(1,2,5,7,8)))
print (Set(1,2,3,4,4,4,8) & Set(3,44,4,4,5))