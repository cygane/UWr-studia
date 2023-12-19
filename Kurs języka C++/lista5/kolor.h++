#pragma once
#include <iostream>
#include <stdexcept>
using namespace std;

class kolor
{
protected:
    uint8_t red;
    uint8_t green;
    uint8_t blue;

public:
    kolor();
    kolor(int r, int g, int b);
    int get_r();
    int get_g();
    int get_b();
    void set_r(int r);
    void set_g(int g);
    void set_b(int b);
    void darker(double x);
    void lighter(double x);
    static kolor mix(kolor k1, kolor k2);
};