#include "tab_bit.h++"
#include <bits/stdc++.h>

//do klasy reff
reff::reff(slowo* slowo_ptr, int ind)
{
    if(slowo_ptr == nullptr) throw std::invalid_argument("Podano niepoprawne dane.");

    this->slowo_ptr = slowo_ptr;
    this->ind = ind;
}

reff reff::operator =(bool change)
    {
        if(change) *slowo_ptr |= (slowo(1) << ind);
            // Utworzenie maski gdzie 1 jest na miejscu indeksu i użycie OR

        else  *slowo_ptr &= ~(slowo(1) << ind);
            // Utworzenie maski gdzie 1 jest wszędzie poza miejscem indeksu i użycie AND

        return *this;
    }

reff::operator bool() const {
    return (*slowo_ptr & (slowo(1) << ind)) != 0;
}

//do klasy tab_bit

tab_bit::tab_bit(int rozm) // wyzerowana tablica bitow [0...rozm]
{
    dl = rozm;
    int ile = (rozm + rozmiarSlowa - 1) / rozmiarSlowa;


    tab = new slowo[ile];
    for(int i = 0; i < ile; i++)
    {
        tab[i] = 0;
    }

}

tab_bit::tab_bit(slowo tb)
{
    dl = 1;
    tab = new slowo[dl];

}

tab_bit::tab_bit(std::initializer_list<bool> list) {
    dl = list.size();
    int ile_slow = (dl + rozmiarSlowa - 1) / rozmiarSlowa;

    tab = new slowo[ile_slow];
    std::initializer_list<bool>::iterator it;
    int i = 0;
    for (it = list.begin(); it != list.end(); ++it)
    {
        pisz(i, *it);
        i++;
    }
}

tab_bit::tab_bit (const tab_bit &tb)
{
    dl = tb.dl;
    int ile = (dl + rozmiarSlowa -1) / rozmiarSlowa;

    tab = new slowo[ile];
    for(int i = 0; i < ile; i++) {
        tab[i]= tb.tab[i];
    }
}

tab_bit::tab_bit(tab_bit &&tb)
{
    dl = tb.dl;
    tab = tb.tab;
    tb.tab = nullptr;
}

tab_bit & tab_bit::operator =(const tab_bit &tb)
{
    if(this == &tb) return *this;

    if (tab != nullptr) delete[] tab;

    dl = tb.dl;
    int ilosc = (dl + rozmiarSlowa - 1) / rozmiarSlowa;

    tab = new slowo[ilosc];
    for(int i = 0; i < ilosc; i++)
    {
        tab[i] = tb.tab[i];
    }

    return *this;
}

tab_bit & tab_bit::operator =(tab_bit &&tb)  //chyba trzeba bedzie poprawic
{
    if (this != &tb)
    {
        dl = tb.dl;
        tab = tb.tab;
        return *this;
    }
}

tab_bit::~tab_bit()
{
    if(tab != nullptr) delete[] tab;
}

//pomocnicze
bool tab_bit::czytaj(int i) const
{
    if(i > dl) throw std::invalid_argument("Indeks jest poza zakresem");
    slowo Sl = *(this->tab +(i / this->rozmiarSlowa));
    i %= this->rozmiarSlowa;
    Sl >>= i;

    return Sl & 1;
}

bool tab_bit::pisz(int i, bool b)
{
    if(i > dl) throw std::invalid_argument("Indeks jest poza zakresem");

    int nr_slowa = i / rozmiarSlowa;
    int nr_bitu = i % rozmiarSlowa;

    reff(&tab[nr_slowa], nr_bitu) = b;
    return b;
}

//indeksowanie

bool tab_bit::operator[](int i) const {
    return czytaj(i);
}

reff tab_bit::operator[](int i) {
    int nr_slowa = i / rozmiarSlowa;
    int id_bitu = i % rozmiarSlowa;

    return reff(&tab[nr_slowa], id_bitu);
}

//rozmiar

int tab_bit::rozmiar() const
{
    return dl;
}

//strumienie

std::istream & operator >> (std::istream &we, tab_bit &tb)
{
    std::string in;
    we >> in;
    int len = in.size();
    for(int i = 0; i < len; i++)
    {
        if(in[i] == '0') tb.pisz(i,false);
        else if(in[i] == '1') tb.pisz(i,true);
        else
        {
           throw std::invalid_argument("Nie mozna rozpoznac bitu");
        }
    }
    return we;

}

std::ostream & operator << (std::ostream &wy, const tab_bit &tb)
{
    for(int i = 0; i < tb.dl; i++)
    {
        wy <<tb[i];
    }
    return wy;
}

//operatory bitowe

tab_bit tab_bit:: operator |(tab_bit tb)
{
    if(dl != tb.dl) throw std::invalid_argument ("Tablice są różnej długości");
    else{
        tab_bit n = tab_bit(dl);
        for (int i = 0; i < dl; i++) {
            if (czytaj(i) == true or tb.czytaj(i) == true) n.pisz(i, true);
            else n.pisz(i, false);
        }
        return n;
    }
}

tab_bit tab_bit:: operator |=(tab_bit tb)
{
    if(dl != tb.dl) throw std::invalid_argument ("Tablice są różnej długości");
    else{
        for (int i = 0; i < dl; i++) {
            if (czytaj(i) == true or tb.czytaj(i) == true) tb.pisz(i, true);
            else tb.pisz(i, false);
        }
        return *this;
    }

}

tab_bit tab_bit:: operator &(tab_bit tb)
{
    if(dl != tb.dl) throw std::invalid_argument ("Tablice są różnej długości");
    else{
        tab_bit n = tab_bit(dl);
        for(int i =0; i < dl; i++)
        {
            if(czytaj(i) == true and  tb.czytaj(i) == true) n.pisz(i,true);
            else n.pisz(i,false);
        }
        return n;
    }
}

tab_bit tab_bit:: operator &=(tab_bit tb)//-
{
    if(dl != tb.dl) throw std::invalid_argument ("Tablice są różnej długości");
    else{
        for(int i =0; i < dl; i++)
        {
            if(czytaj(i) == true and  tb.czytaj(i) == true) tb.pisz(i,true);
            else tb.pisz(i,false);
        }
        return *this;
    }
}

tab_bit tab_bit:: operator ^(tab_bit tb)
{
    if(dl != tb.dl) throw std::invalid_argument ("Tablice są różnej długości");
    else{
        tab_bit n = tab_bit(dl);
        {
            for(int i =0; i < dl; i++)
            {
                if ((czytaj(i) == true and tb.czytaj(i) == true) or (czytaj(i) == false and tb.czytaj(i) == false))
                    n.pisz(i, false);
                else n.pisz(i,true);
            }
        }
        return n;
    }
}

tab_bit tab_bit:: operator ^=(tab_bit tb)
{
    if(dl != tb.dl) throw std::invalid_argument ("Tablice są różnej długości");
    else{
        {
            for(int i =0; i < dl; i++)
            {
                if ((czytaj(i) == true and tb.czytaj(i) == true) or (czytaj(i) == false and tb.czytaj(i) == false))
                    tb.pisz(i, false);
                else tb.pisz(i,true);
            }
        }
        return *this;
    }
}

tab_bit tab_bit:: operator !()
{
    tab_bit n = tab_bit(dl);
    for(int i =0; i < dl; i++)
    {
        n[i] = !czytaj(i);
    }
    return n;
}








