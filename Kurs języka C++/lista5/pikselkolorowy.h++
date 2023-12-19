#pragma once
#include <iostream>
#include <stdexcept>
#include "piksel.h++"
#include "kolortransparentny.h++"

class pikselkolorowy : public piksel
{
protected:
    kolor_transparentny clr;
public:
    pikselkolorowy();
    pikselkolorowy(int x, int y, kolor_transparentny k);
    void move(int x, int y);
};



