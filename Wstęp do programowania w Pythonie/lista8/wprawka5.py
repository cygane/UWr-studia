
elfy=[]
ile=0
kcal = 0
for x in open('kcal.txt').readlines():
 if x=='\n':
  elfy.append(ile)
  ile=0
 else:
  ile+=int(x)
elfy = sorted(elfy)
kcal = elfy[len(elfy)-1] + elfy[len(elfy)-2] + elfy[len(elfy)-3]
print(kcal)
        
        

