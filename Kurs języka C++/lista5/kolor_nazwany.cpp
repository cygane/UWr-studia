#include "kolor_nazwany.h++"

kolor_nazwany::kolor_nazwany() : kolor::kolor()
{
    this->nazwa = "";
}

kolor_nazwany::kolor_nazwany(int r, int g, int b, std::string n) : kolor::kolor(r,g,b)
{
    for(int i = 0; i < n.size(); i++)
    {
        if (n[i] < 'a' or n[i] > 'z') throw std::invalid_argument("Nazwa mnemoniczna jest zle zdefiniowana");
    }
    this->nazwa = n;
}
