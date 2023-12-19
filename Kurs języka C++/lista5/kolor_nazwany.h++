#pragma once
#include "kolor.h++"
#include <iostream>
#include <stdexcept>

class kolor_nazwany :  virtual public kolor
{
protected:
    std::string nazwa;

public:
    kolor_nazwany();
    kolor_nazwany(int r, int g, int b, std::string n);
};
