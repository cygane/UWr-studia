import random

def uprosc_zdanie(tekst, dl_slowa, liczba_slow):
    tekst = ' '.join([i for i in tekst.split() if len(i) <= dl_slowa])

    slowa = tekst.split()

    if len(slowa) > liczba_slow:
        usun = random.sample(range(len(slowa)), len(slowa) - liczba_slow)
        slowa = [slowa[i] for i in range(len(slowa)) if i not in usun]

    res = ' '.join(slowa)
    return res


tekst = "Podział peryklinalny inicjałów wrzecionowatych \
   kambium charakteryzuje się ścianą podziałową inicjowaną \
   w płaszczyźnie maksymalnej."

print(uprosc_zdanie(tekst, 10, 5))
#przetestowane na wierszu https://www.szymborska.org.pl/szymborska/wiersze/dlon/
print(uprosc_zdanie("Dwadzieścia siedem kości, \
trzydzieści pięć mięśni, \
około dwóch tysięcy komórek nerwowych \
w każdej opuszce naszych pięciu palców. \
To zupełnie wystarczy, \
żeby napisać „Mein Kampf” \
albo „Chatkę Puchatka”.", 12, 8))

