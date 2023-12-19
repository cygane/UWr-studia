
def minimum(l,p,t):
    if l==p:
        mini = t[l]
    else:
        min1 = minimum(l,(l+p)/2,t)
        min2 = minimum(((l+p+1)/2),p,t)
        if min1 < min2:
            mini = min1
        else:
            mini = min2
    return mini

minimum(0,1,[0,1,3,5,2])