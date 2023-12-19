#include "kolortransparentny.h++"

kolor_transparentny::kolor_transparentny() : kolor::kolor()
{
    this->alfa = 255;
}

kolor_transparentny::kolor_transparentny(int r, int g, int b, int a) : kolor::kolor(r, g, b)
{
    this->alfa = a;
}
