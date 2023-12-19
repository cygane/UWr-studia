
class TreeItem:
    def __init__(self,value):
        self.val = value
        self.left = None
        self.right = None

def ods(tree,s):
    if tree.left != None and tree.right != None:
        sl = ods(tree.left,s)
        sp = ods(tree.right,s)
        if sl[1] == False or sl[1] == False:
            return [0, False]
        x = sl[0] - sp[0]
        if x < 0:
            x = x * (-1)
        if x<=s:
            return [sl[0]+sp[0]+tree.val, True]
        else:
            return [0,False]
        
    elif tree.right != None:
        sp = ods(tree.right,s)
        return [tree.val+sp[0],sp[1]]
    elif tree.left != None:
        sl = ods(tree.left,s)
        return [tree.val+sl[0],sl[1]]
    else:
        return [tree.val, True]



x = TreeItem(5)
x.left = TreeItem(3)
x.right = TreeItem(12)
x.left.left = TreeItem(2)
x.left.right = TreeItem(4)
x.right.left = TreeItem(9)
x.right.right = TreeItem(13)

print(ods(x,30)[1])
   

