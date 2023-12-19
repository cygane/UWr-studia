#pragma once
#include "wyrazenie.h++"
#include "operator1arg.h++"

class Operator2arg : public Operator1arg{
public:
    int priorytet() override{
        return 1;
    }
    Wyrazenie *y;
    Operator2arg(Wyrazenie *x, Wyrazenie *y);
    virtual bool lewa_lacznosc() = 0;
};

class Dodaj : public Operator2arg{
public:
    std::string zapis() override;
    double oblicz() override;
    bool lewa_lacznosc() override{
        return true;
    }
    Dodaj(Wyrazenie *x, Wyrazenie *y) : Operator2arg(x, y) {}
};

class Odejmij : public Operator2arg{
public:
    std::string zapis()override;
    double oblicz()override;
    bool lewa_lacznosc() override{
        return true;
    }
    Odejmij(Wyrazenie *x, Wyrazenie *y) : Operator2arg(x, y) {}
};

class Mnoz : public Operator2arg{
public:
    std::string zapis()override;
    double oblicz()override;
    int priorytet() override{
        return 2;
    }
    bool lewa_lacznosc() override{
        return true;
    }
    Mnoz(Wyrazenie *x, Wyrazenie *y) : Operator2arg(x, y) {}
};

class Dziel : public Operator2arg{
public:
    std::string zapis()override;
    double oblicz()override;
    int priorytet() override{
        return 2;
    }
    bool lewa_lacznosc() override{
        return true;
    }
    Dziel(Wyrazenie *x, Wyrazenie *y) : Operator2arg(x, y) {}
};

class Logarytm : public Operator2arg{
public:
    std::string zapis()override;
    double oblicz()override;
    int priorytet() override{
        return 3;
    }
    bool lewa_lacznosc() override{
        return true;
    }
    Logarytm(Wyrazenie *x, Wyrazenie *y) : Operator2arg(x, y) {}
};

class Modulo : public Operator2arg{
public:
    std::string zapis()override;
    double oblicz() override;
    int priorytet() override{
        return 3;
    }
    bool lewa_lacznosc() override{
        return true;
    }
    Modulo(Wyrazenie *x, Wyrazenie *y) : Operator2arg(x, y) {}
};

class Potega : public Operator2arg{
public:
    std::string zapis()override;
    double oblicz()override;
    int priorytet() override{
        return 3;
    }
    bool lewa_lacznosc() override{
        return false;
    }
    Potega(Wyrazenie *x, Wyrazenie *y) : Operator2arg(x, y) {}
};


std::string wypisz(Wyrazenie *x, Wyrazenie *y, std::string srodek, int pr);









