#include "kolor.h++"

kolor::kolor()
{
    this->red = 0;
    this->green = 0;
    this->blue = 0;
}

kolor::kolor(int r, int g, int b)
{
    if (r < 0 or r > 255 or g < 0 or g > 255 or b < 0 or b > 255)
        throw std::invalid_argument ("zostaly podane zle wartosci zmiennych");
    else
    {
        this->red = r;
        this->green = g;
        this->blue = b;
    }
}

int kolor::get_r() { return red;}

int kolor::get_g() { return green;}

int kolor::get_b() { return blue;}

void kolor::set_r(int r) { this->red = r;}

void kolor::set_g(int g) { this->green = g;}

void kolor::set_b(int b) { this->blue = b;}

void kolor::lighter(double x)
{
    if(x > 1 or x < 0) throw std::invalid_argument ("X jest spoza zakresu");
    int r = 255 - red;
    int g = 255 - green;
    int b = 255 - blue;
    red += r*x;
    green += g*x;
    blue = b*x;
}

void kolor::darker(double x)
{
    if(x > 1 or x < 0) throw std::invalid_argument ("X jest spoza zakresu");
    red *= x;
    green *= x;
    blue *= x;
}

kolor kolor::mix(kolor k1, kolor k2)
{
    int r = (k1.red + k2.red) / 2;
    int g = (k1.green + k2.green) / 2;
    int b = (k1.blue + k2.blue) / 2;
    return  kolor(r, g, b );
}