#include "pikselkolorowy.h++"

pikselkolorowy::pikselkolorowy(int x, int y, kolor_transparentny k) : piksel::piksel(x, y)
{
    this->clr = k;
}

pikselkolorowy::pikselkolorowy() : piksel::piksel()
{
    this->clr = kolor_transparentny(0, 0, 0, 255);
}

void pikselkolorowy::move(int a, int b)
{
    if (this->x + a > roz_x  or this->y + b > roz_y or this->x + a < 0 or this->y + b < 0)
        throw std::invalid_argument("Niepoprawny wektor");

    this->x += a;
    this->y += b;
}