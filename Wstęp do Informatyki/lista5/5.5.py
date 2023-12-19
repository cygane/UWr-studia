#rekurencyjna
def fTrec(n,m):
    if m == 0 and n >= 0:
        return n
    if n == 0 and n >= 0:
        return m
    elif n>0 and m>0:
        return fTrec(n-1,m) + 2*fTrec(n,m-1)



#nierekurencyjna


print(fTrec(3,4))





        


