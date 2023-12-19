import random

def randperm(n):
    list = []
    list2 = []
    for i in range(n):
        list.append(i)

    while len(list) > 0:
        element = random.choice(list)
        list2.append(element)
        list.remove(element)
    return list2

#print (randperm(10))
#print (randperm(10))
print (randperm(100))
#print (randperm(1000))
#print (randperm(10000))
#print (randperm(100000))
#print (randperm(1000000))