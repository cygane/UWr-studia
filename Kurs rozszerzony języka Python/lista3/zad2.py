from collections import deque

#[’(’, 2, ’+’, 3, ’)’, ’*’, 4]
def konwersja(wyrażenie_infiksowe):
    operatory = {'*': 3, '/': 3, '+': 2, '-': 2, '(': 1}
    stos = deque([])
    res = []
    for x in wyrażenie_infiksowe:
        if type(x) is int or type(x) is float:
            res.append(x)
        elif x == '(':
            stos.append(x)
        elif x == ')':
            while stos[-1] != '(':
                res.append(stos.pop())
            stos.pop()
        else:
            while len(stos) != 0 and operatory[stos[-1]] >= operatory[x]:
                res.append(stos.pop())
            stos.append(x)
    
    while len(stos) != 0:
        res.append(stos.pop())
    
    return res

def wykonaj(op,a,b):
    if op == '*':
        return a * b
    elif op == '/':
        return a // b
    elif op == '+':
        return a + b
    else:
        return a - b

def oblicz(wyrazenie_onp):
    stos = deque([])
    for x in wyrazenie_onp:
        if x == '+' or x =='-' or x == '*' or x == '/':
            b = stos.pop()
            a = stos.pop()
            res = wykonaj(x,a,b)
            stos.append(res)
        else:
            stos.append(x)
    return stos.pop()

print(konwersja(['(', 2, '+', 3, ')', '*', 4]))
print(konwersja(['(', 5, '-', 6 ,')', '*', 4, '-', '(', 5, '-', 2, '*', 2, ')']))
print(oblicz(konwersja(['(', 2, '+', 3, ')', '*', 4])))
print(oblicz(konwersja(['(', 5, '-', 6 ,')', '*', 4, '-', '(', 5, '-', 2, '*', 2, ')'])))
