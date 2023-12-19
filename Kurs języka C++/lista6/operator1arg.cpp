#include "operator1arg.h++"
#include "wyrazenie.h++"
#include <cmath>

Operator1arg::Operator1arg(Wyrazenie *x) {
    this->x = x;
}

Sin::Sin(Wyrazenie *x) : Operator1arg(x) {}

double Sin::oblicz() {
    return sinl(x->oblicz());
}

std::string Sin::zapis(){
    return "sin(" + x->zapis() + ")";
}

Cos::Cos(Wyrazenie *x) : Operator1arg(x) {}

double Cos::oblicz() {
    return cos(x->oblicz());
}

std::string Cos::zapis(){
    return "cos(" + x->zapis() + ")";
}

Ln::Ln(Wyrazenie *x) : Operator1arg(x) {}

double Ln::oblicz() {
    return log(x->oblicz());
}

std::string Ln::zapis(){
    return "ln(" + x->zapis() + ")";
}

Exp::Exp(Wyrazenie *x) : Operator1arg(x) {}

double Exp::oblicz() {
    return exp(x->oblicz());
}

std::string Exp::zapis(){
    return "exp(" + x->zapis() + ")";
}

Bezwzgl::Bezwzgl(Wyrazenie *x) : Operator1arg(x) {}

double Bezwzgl::oblicz() {
    return abs(x->oblicz());
}

std::string Bezwzgl::zapis(){
    return "|" + x->zapis() + "|";
}

Przeciw::Przeciw(Wyrazenie *x) : Operator1arg(x) {}

double Przeciw::oblicz() {
    return (-1) * x->oblicz();
}

std::string Przeciw::zapis(){
    return "-(" + x->zapis() + ")";
}

Odwrot::Odwrot(Wyrazenie *x) : Operator1arg(x) {}

double Odwrot::oblicz() {
    return 1.0 / x->oblicz();
}

std::string Odwrot::zapis(){
    return "1 / " + x->zapis();
}







