#pragma once
#include "wyrazenie.h++"

class Operator1arg : public Wyrazenie{

public:
    Wyrazenie *x;
    Operator1arg(Wyrazenie *x);
};

class Sin : public Operator1arg{
public:
    Sin(Wyrazenie *x);
    std::string zapis()override;
    double oblicz()override;
};

class Cos : public Operator1arg{
public:
    Cos(Wyrazenie *x);
    std::string zapis()override;
    double oblicz()override;
};

class Ln : public Operator1arg{
public:
    Ln(Wyrazenie *x);
    std::string zapis()override;
    double oblicz()override;
};

class Exp : public Operator1arg{
public:
    Exp(Wyrazenie *x);
    std::string zapis()override;
    double oblicz()override;
};

class Bezwzgl : public Operator1arg{
public:
    Bezwzgl(Wyrazenie *x);
    std::string zapis()override;
    double oblicz()override;
};

class Przeciw : public Operator1arg{
public:
    Przeciw(Wyrazenie *x);
    std::string zapis()override;
    double oblicz()override;
};


class Odwrot : public Operator1arg{
public:
    Odwrot(Wyrazenie *x);
    std::string zapis()override;
    double oblicz()override;
};




