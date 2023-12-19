class TreeItem:
    def __init__(self,value):
        self.val = value
        self.left = None
        self.right = None

def write(root): 
    if (root!=None):
        write( root.left) 
        print (root.val) 
        write( root.right)

def czykopiec(tree):
    if tree.left != None and tree.right != None:
        if tree.left.val < tree.val or tree.right.val < tree.val:
            return False
    elif tree.left != None and tree.right == None:
        return False
    elif tree.right != None and tree.left == None:
        return False
    else:
        if tree.right != None and tree.left != None:
            czykopiec(tree.left)
            czykopiec(tree.right)
    return True


tree = TreeItem(5)
tree.left = TreeItem(3)
tree.right = TreeItem(8)
write(tree)
print(czykopiec(tree))