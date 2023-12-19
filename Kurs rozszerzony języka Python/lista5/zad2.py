class Formula:
    def __add__(self,w):
        return Or(self,w)

    def __mul__(self,w):
        return And(self,w)

    def uprosc(self):
        return self

    def wolneZmienne(self):
        if isinstance(self, And) or isinstance(self, Or):
            return self.w1.wolneZmienne() | self.w2.wolneZmienne()
        if isinstance(self, Not):
            return self.w.wolneZmienne()
        if isinstance(self, Zmienna):
            return {self.nazwa}
        return set()

    @staticmethod
    def tautologia(w): 
        wartosci = [dict()]
        for zmienna in w.wolneZmienne():
            noweWartosci = []
            for wartosciowanie in wartosci:
                noweWartosci.append({**wartosciowanie, zmienna:True})
                noweWartosci.append({**wartosciowanie, zmienna:False})
            wartosci = noweWartosci
        for wartosc in wartosci:
            if not(w.oblicz(wartosc)):
                return False
        return True



class Stala(Formula):
    def __init__(self,wartosc):
        self.wartosc = wartosc
    
    def __str__(self):
        if self.wartosc:
            return "true"
        return "false"

    def oblicz(self,zmienne):
        return self.wartosc
        


class Zmienna(Formula):
    def __init__(self,nazwa):
        self.nazwa = nazwa

    def __str__(self):
        return self.nazwa

    def oblicz(self,zmienne):
        if self.nazwa in zmienne:
            return zmienne[self.nazwa]
        else:
            raise BrakWartosci("Brak Wartosci zmiennej")

class Not(Formula):
    def __init__(self,w):
        self.w = w
    
    def __str__(self):
        return f"¬{self.w}"

    def oblicz(self,zmienne):
        return not(self.w.oblicz(zmienne))


class And(Formula):
    def __init__(self,w1,w2):
        self.w1 = w1
        self.w2 = w2

    def __str__(self):
        return f"({self.w1} ∧ {self.w2})"

    def oblicz(self,zmienne):
        return self.w1.oblicz(zmienne) and self.w2.oblicz(zmienne)

    def uprosc(self):
        if Formula.tautologia(Not(self.w1)):
            return Stala(False)
        if Formula.tautologia(Not(self.w2)):
            return Stala(False)
        if Formula.tautologia(self):
            return Stala(True)
        if Formula.tautologia(Not(self)):
            return Stala(False)
        if Formula.tautologia(self.w1):
            return self.w2.uprosc()
        if Formula.tautologia(self.w2):
            return self.w1.uprosc()
        return self.w1.uprosc() * self.w2.uprosc()

class Or(Formula):
    def __init__(self,w1,w2):
        self.w1 = w1
        self.w2 = w2

    def __str__(self):
        return f"({self.w1} ∨ {self.w2})"

    def oblicz(self,zmienne):
        return self.w1.oblicz(zmienne) or self.w2.oblicz(zmienne)

    def uprosc(self):
        if Formula.tautologia(self.w1):
            return Stala(True)
        if Formula.tautologia(self.w2):
            return Stala(True)
        if Formula.tautologia(self):
            return Stala(True)
        if Formula.tautologia(Not(self)):
            return Stala(False)
        if Formula.tautologia(Not(self.w1)):
            return self.w2.uprosc()
        if Formula.tautologia(Not(self.w2)):
            return self.w1.uprosc()
        return self.w1.uprosc() + self.w2.uprosc()


class BrakWartosci(Exception):
    pass

print(Or(Not(Zmienna("x")), And(Zmienna("y"), Stala(True))).oblicz({"x":True, "y":False}))
print(Or(Not(Zmienna("x")), And(Zmienna("y"), Stala(True))).oblicz({"x":False, "y":False}))
print(Or(Not(Zmienna("x")), And(Zmienna("y"), Stala(True))).oblicz({"x":True, "y":True}))
print(Or(Not(Zmienna("x")), And(Zmienna("y"), Stala(True))).oblicz({"x":False, "y":True}))

try:
    print(Or(Not(Zmienna("x")), And(Zmienna("y"), Stala(True))).oblicz({"x":True}))
except(BrakWartosci) as e:
    print(str(e))

print(Formula.tautologia(Or(Not(Zmienna("x")), And(Zmienna("y"), Stala(True)))))
print(Formula.tautologia(Or(Stala(True), Zmienna("p"))))
print(Formula.tautologia(Or(Not(Zmienna("x")), Zmienna("x"))))

print(Or(Stala(False), Zmienna("p")).uprosc())
print(And(Stala(False), Zmienna("p")).uprosc())
