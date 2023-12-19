#pragma once

#include <string>
#include <iostream>

class Wyrazenie {

public:
    virtual double oblicz() = 0;
    virtual std::string zapis() = 0;
    virtual int priorytet() { return 9;}
    virtual bool lewa_lacznosc()
    {
        std::cout << "Wykonywana jest lewa_lacznasc z klasy Wyrazenie - error."<< std::endl;
        return true;
    }
    virtual ~Wyrazenie(){};
};

class Liczba : public Wyrazenie{
private:
    double x;
public:
    Liczba(double x);
    double oblicz() override;
    std::string zapis() override;
};

class Stala : public Wyrazenie{
protected:
    double x;
};

class Pi : public Stala{
public:
   Pi();
   std::string zapis()override;
   double oblicz() override;
};

class E : public Stala{
public:
    E();
    std::string zapis()override;
    double oblicz()override;
};

class Fi : public Stala{
public:
    Fi();
    std::string zapis()override;
    double oblicz()override;
};

class Zmienna: public Wyrazenie{
private:
    static std::vector<std::pair<std::string, double>> zmienne;
public:
    static void dodaj_zm(std::string var, double val);
    static void wypisz_zm();
    static void usun_zm(std::string var);
    std::string nazwa_zm;
    Zmienna(std::string x);
    std::string zapis()override;
    double oblicz()override;
};


