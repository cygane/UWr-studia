#include "operator2arg.h++"
#include "wyrazenie.h++"
#include "operator1arg.h++"

Operator2arg::Operator2arg(Wyrazenie *x, Wyrazenie *y) : Operator1arg(x) {
    this->y = y;
}


double Dodaj::oblicz() {
    return x->oblicz() + y->oblicz();
}

double Odejmij::oblicz() {
    return x->oblicz() - y->oblicz();
}

double Mnoz::oblicz(){
    return x->oblicz() * y->oblicz();
}

double Dziel::oblicz(){
    return x->oblicz() / y->oblicz();
}

double Modulo::oblicz() {
    return fmod(x->oblicz(), y->oblicz());
}

double Potega::oblicz(){
    return pow(x->oblicz(), y->oblicz());
}

double Logarytm::oblicz(){
    double e1, e2;

    e1 = log (x->oblicz());
    e2 = log (y->oblicz());

    return e2 / e1;
}


std::string Dodaj::zapis(){
    return wypisz(x, y, "+", priorytet());
}

std::string Odejmij::zapis(){
    return wypisz(x, y, "-", priorytet());
}

std::string Mnoz::zapis(){
    return wypisz(x, y, "*", priorytet());
}

std::string Dziel::zapis(){
    return wypisz(x, y, "/", priorytet());
}

std::string Logarytm::zapis(){
    return "log(" + x->zapis() + ", " + y->zapis() + ")";
}

std::string Modulo::zapis(){
    return wypisz(x, y, "%", priorytet());
}

std::string Potega::zapis(){
    return wypisz(x, y, "^", priorytet());
}

std::string wypisz(Wyrazenie *x, Wyrazenie *y, std::string srodek, int pr){
    std::string left, right;

    if (x->priorytet() > pr)
        left = x->zapis();
    else if (x->priorytet() < pr)
        left = "(" + x->zapis() + ")";
    else if (x->lewa_lacznosc() == true)
        left = x->zapis(); // the same priority, checks whether it is left-sided operator
    else
        left = "(" + x->zapis() + ")";

    if (y->priorytet() > pr)
        right = y->zapis();
    else if (y->priorytet() < pr)
        right = "(" + y->zapis() + ")";
    else if (y->lewa_lacznosc() == true)
        right = y->zapis(); // the same priority, checks whether it is left-sided operator
    else
        right = "(" + y->zapis() + ")";

    return left + srodek + right;
}






