
class TreeItem:
    def __init__(self,value):
        self.val = value
        self.size = 1
        self.left = None
        self.right = None

def roz(t,a):
    s = 0
    if t.right != None and t.left != None:
        if t.val == a:
            s += 1 + t.right.size
        elif t.val < a:
            s += roz(t.right,a)
        elif t.val > a:
            s += roz(t.left,a) + t.right.size + 1
    elif t.right != None:
        if t.val == a:
            s += 1 + t.right.size
        elif t.val < a:
            s += roz(t.right,a)
        elif t.val > a:
            s += t.size + 1
    elif t.left != None:
        if t.val == a:
            s += 1 
        elif t.val < a:
            s += 0
        elif t.val > a:
            s += roz(t.left,a) + 1
    else:
        if t.val == a:
            s = 1 
        elif t.val < a:
            s = 0
        elif t.val > a:
            s = 1

    return s

x = TreeItem(6)
x.left = TreeItem(3)
x.right = TreeItem(12)
x.left.left = TreeItem(2)
x.left.right = TreeItem(3)

print(roz(x,2))



