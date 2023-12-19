#pragma once
#include <bits/stdc++.h>

class reff
{
typedef uint64_t slowo;
static const int rozmiarSlowa = 64;

private:
    slowo* slowo_ptr;
    int ind;
public:
    reff(slowo* slowo_ptr, int ind);
    operator bool() const;
    reff operator =(bool change);
};

class tab_bit
{
    typedef uint64_t slowo; // komorka w tablicy
    static const int rozmiarSlowa = 64; // rozmiar slowa w bitach
    friend std::istream & operator >> (std::istream &we, tab_bit &tb);
    friend std::ostream & operator << (std::ostream &wy, const tab_bit &tb);
    class ref; // klasa pomocnicza do adresowania bitów
protected:
    int dl; // liczba bitów
    slowo *tab; // tablica bitów
public:
    explicit tab_bit (int rozm); // wyzerowana tablica bitow [0...rozm]
    explicit tab_bit (slowo tb); // tablica bitów [0...rozmiarSlowa]
    tab_bit (std::initializer_list<bool> list);
    // zainicjalizowana wzorcem
    tab_bit (const tab_bit &tb); // konstruktor kopiujący
    tab_bit (tab_bit &&tb); // konstruktor przenoszący
    tab_bit & operator = (const tab_bit &tb); // przypisanie kopiujące
    tab_bit & operator = (tab_bit &&tb); // przypisanie przenoszące
    ~tab_bit (); // destruktor
private:
    bool czytaj (int i) const; // metoda pomocnicza do odczytu bitu
    bool pisz (int i, bool b); // metoda pomocnicza do zapisu bitu
public:
    bool operator[] (int i) const; // indeksowanie dla stałych tablic bitowych
    reff operator[] (int i); // indeksowanie dla zwykłych tablic bitowych
    int rozmiar() const; // rozmiar tablicy w bitach
public:
    //zaprzyjaznione operatory strumieniowe
    friend std::istream & operator >> (std::istream &we, tab_bit &tb);
    friend std::ostream & operator << (std::ostream &wy, const tab_bit &tb);
public:
    // operatory bitowe: | i |=, & i &=, ^ i ^= oraz !
    tab_bit operator |(tab_bit tb);
    tab_bit operator |=(tab_bit tb);
    tab_bit operator &(tab_bit tb);
    tab_bit operator &=(tab_bit tb);
    tab_bit operator ^(tab_bit tb);
    tab_bit operator ^=(tab_bit tb);
    tab_bit operator !();

};
std::istream & operator >> (std::istream &we, tab_bit &tb);
std::ostream & operator << (std::ostream &wy, const tab_bit &tb);

