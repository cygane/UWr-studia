#include <iostream>
#include "tab_bit.h++"
using namespace std;

int main()
{
    cout << "Test klasy tab_bit" << endl;
    cout << "Tworzenie tablicy o podanych dlugosciach:" << endl;

    cout << "Rozmiar = 10" << endl;
    tab_bit test1_1(10);
    cout << "Rozmiar zwracany przez tablice = " << test1_1.rozmiar() << endl;

    cout << "Rozmiar = 75" << endl;
    tab_bit test1_2(75);
    cout << "Rozmiar zwracany przez tablice = " << test1_2.rozmiar() << endl;


    cout << "Test konstruktorww kopiujacych" << endl;
    tab_bit test2_1(8);
    /*
    test2_1[3] = true; //nie dziala
    test2_1[7] = true;
    */
    cout << "Bazowa tablica: " << test2_1 <<endl;
    tab_bit test2_2(test2_1);
    cout << "Skopiowana tablica: " << test2_2 <<endl;
    tab_bit test2_3(std::move(test2_1));
    cout << "Tablica przeniesiona: " << test2_3 <<endl;

    cout << "Wzorzec tablicy {1,0,0,0,1}: " <<endl;
    tab_bit test2_4 = tab_bit({1,0,0,0,1});
    cout << "Utworzona tablica: " << test2_4 << endl;


    cout << "Test przypisania:" << endl;
    cout << "Kopiowanie przepisaniem " << test2_3 << endl;
    tab_bit test3_1 = test2_3;
    cout << "Skopiowana tablica = " << test3_1 << endl;


    cout << "Test dostepu do elementow listy indeksami" << endl;
    tab_bit test4_1(20);
    cout << "Tablica testowa " << test4_1 << endl;
    cout << "Zmiana wartosci w tablicy:" << endl;


    cout << "Zmiana Indeks: 0 Nowa wartosc: true" << endl;
    test4_1[0] = true;
    cout << "Tablica po zmianie wartsci:" << test4_1 << endl;

    cout << "Zmiana Indeks: 4 Nowa wartosc: true" << endl;
    test4_1[4] = true;
    cout << "Tablica po zmianie wartsci:" << test4_1 << endl;

    cout << "Zmiana Indeks: 19 Nowa wartosc: true" << endl;
    test4_1[19] = true;
    cout << "Tablica po zmianie wartosci" << test4_1 << endl;


    // operatory binarne

    tab_bit test5_1 = {1,0,1,0};
    tab_bit test5_2 = {1,1,0,0};

    cout << "Test operatorow binarnych";
    cout << "lista1: " << test5_1 <<"   lista2: " << test5_2 << endl;

    cout << "OR:" << (test5_1|test5_2) << endl;
    cout << "AND:" << (test5_1&test5_2) << endl;
    cout << "XOR:" << (test5_1^test5_2) << endl;
    cout << test5_1<< "  !lista1:" << (!test5_1) << endl;


    // test z polecenia
    tab_bit t(64);
    tab_bit u(45ull);
    tab_bit v(t);
    v[0] = true;
    t[45] = true;
    bool b = v[1];
    cout << b << endl;

    u[45] = u[46] = u[63]; // przepisanie bitu 63-go do bitow 45-go i 46-go
    cout<<t<<endl;

}
