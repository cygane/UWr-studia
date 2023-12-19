#pragma once
#include <iostream>
using namespace std;

class Liczba
{
private:
    int length = 3;
    double* tablica;
    int counter;
    int backup_counter;
public:
    Liczba();
    Liczba(const Liczba& l);
    Liczba(Liczba&& l);
    Liczba(double val);
    ~Liczba();
    Liczba& operator =(Liczba&& l);
    Liczba& operator =(Liczba& l);
    void set(double value);
    double get();
    void backup();

};


