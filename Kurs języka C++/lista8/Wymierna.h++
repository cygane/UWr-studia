#pragma once
#include <iostream>
#include <stdexcept>
namespace Obliczenia {

    class Wymierna {
    private:
        int licz;
        int mian;
        void skroc();
    public:
        Wymierna();
        Wymierna(const int l);
        Wymierna(int li, int mi);
        int get_licz() { return this->licz; }
        int get_mian() { return this->mian; }
        friend Wymierna operator-(Wymierna w);
        friend Wymierna operator!(Wymierna w);
        friend Wymierna operator+ (Wymierna &w, Wymierna &x);
        friend Wymierna operator- (Wymierna &w, Wymierna &x);
        friend Wymierna operator* (Wymierna &w, Wymierna &x);
        friend Wymierna operator/ (Wymierna &w, Wymierna &x);
        Wymierna& operator+=(const Wymierna &w);
        Wymierna& operator-=(const Wymierna &w);
        Wymierna& operator*=(const Wymierna &w);
        Wymierna& operator/=(const Wymierna &w);
        operator double();
        operator int();
        friend std::ostream &operator<<(std::ostream &wyj, Wymierna &w);
        std::string to_str();
    };
}



