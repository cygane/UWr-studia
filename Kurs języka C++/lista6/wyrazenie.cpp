#include "wyrazenie.h++"
#include <iostream>
#include <vector>
#include <string>
#include <cmath>
std::vector<std::pair<std::string, double>> Zmienna::zmienne;

Liczba::Liczba(double x){ this->x = x;
}

double Liczba::oblicz(){
    return x;
}

std::string Liczba::zapis(){
    return std::to_string(x);
}

Pi::Pi() {
    this->x = 3.141592;
}

double Pi::oblicz() {
    return x;
}

std::string Pi::zapis(){
    return "pi";
}

E::E(){
    this->x = 2.718281;
}

double E::oblicz() {
    return x;
}

std::string E::zapis(){
    return "e";
}

Fi::Fi(){
    this->x = 1.618033;
}

double Fi::oblicz() {
    return x;
}

std::string Fi::zapis(){
    return "fi";
}

Zmienna::Zmienna(std::string x) {
    this->nazwa_zm = x;
}

std::string Zmienna::zapis() {
    return nazwa_zm;
}

double Zmienna::oblicz() {
    try
    {
        int ile = Zmienna::zmienne.size();
        for (int i = 0; i < ile; i++)
            if (Zmienna::zmienne[i].first == nazwa_zm)
                return Zmienna::zmienne[i].second;

        std::string err = "Nie ma takiej zmiennej";
        throw err;
    }
    catch(std::string err_m)
    {
        std::cerr << "Error w statycznych zmiennych: " << err_m << " podczas obliczania."<<std::endl;
        std::cerr << "Zwracam 1 zamiast: " << nazwa_zm << std::endl;
        return 1;
    }
}

void Zmienna::dodaj_zm(std::string var, double val) {
    int ile = Zmienna::zmienne.size();
    for (int i = 0; i < ile; i++)
    {
        if (Zmienna::zmienne[i].first == var)
        {
            std::cout << "Zmienna " << var << " już istnieje, jej wartościa jest "
                      << Zmienna::zmienne[i].second << std::endl;
            return;
        }
    }

    Zmienna::zmienne.push_back(make_pair(var, val));
}

void Zmienna::usun_zm(std::string var) {try
    {
        int ile = Zmienna::zmienne.size();
        for (int i = 0; i < ile; i++)
        {
            if (Zmienna::zmienne[i].first == var)
            {
                Zmienna::zmienne.erase(Zmienna::zmienne.begin() + i);
                return;
            }
        }
        std::string err = "Nie ma takiej zmiennej.";
        throw err;
    }
    catch (std::string err)
    {
        std::cout << "Error w statycznych zmiennych: " << err << " podczas obliczania."<<std::endl;
        std::cout << "Tablica zmiennych sie nie zmieniła." << std::endl;
    }
}

void Zmienna::wypisz_zm() {
    int ile = Zmienna::zmienne.size();

    std::cout << "Zapisane zmienne: " << std::endl;
    for (int i = 0; i < ile; i++)
        std::cout << Zmienna::zmienne[i].first << "\t" << Zmienna::zmienne[i].second << std::endl;
}