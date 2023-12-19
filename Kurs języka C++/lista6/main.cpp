#include <iostream>
#include "wyrazenie.h++"
#include "operator1arg.h++"
#include "operator2arg.h++"

int main() {
    Wyrazenie *w1 = new Dziel(
            new Mnoz(
                    new Odejmij(
                            new Zmienna("x"),
                            new Liczba(1)),
                    new Zmienna("x")),
            new Liczba(2));

    Wyrazenie *w2 = new Dziel(
            new Dodaj(
                    new Liczba(3),
                    new Liczba(5)),
            new Dodaj(new Liczba(2),
                    new Mnoz(
                            new Zmienna("x"),
                            new Liczba(7))));

    Wyrazenie *w3 = new Odejmij(
            new Dodaj(
                    new Liczba(2),
                    new Mnoz(
                            new Zmienna("x"),
                            new Liczba(7))),
            new Dodaj(
                    new Mnoz(
                            new Zmienna("y"),
                            new Liczba(3)),
                    new Liczba(5)));

    Wyrazenie *w4 = new Dziel(
            new Cos(new Mnoz(
                    new Dodaj(
                            new Zmienna("x"),
                            new Liczba(1)),
                    new Pi())),
            new Potega(
                    new E(),
                    new Potega(
                            new Zmienna("x"),
                    new Liczba(2)))

    );

    Wyrazenie *w5 = new Odejmij(
            new Pi(),
            new Dodaj(
                    new Liczba(2),
                    new Mnoz(
                            new Zmienna("x"),
                            new Liczba(7)
                    ) )
    );

    std::cout<<"obliczanie wartości dla zmiennej x i y "<<std::endl;

    /*for(int i=0;i<=100;i++){
        double x_x = i/100;
        double y_y = i/100;
        Zmienna::dodaj_zm("x", x_x);
        Zmienna::dodaj_zm("y", y_y);
        std::cout << w1->oblicz() << "  " << w1->zapis() << std::endl;
        std::cout << w2->oblicz() << "  " << w2->zapis() << std::endl;
        std::cout << w3->oblicz() << "  " << w3->zapis() << std::endl;
        std::cout << w4->oblicz() << "  " << w4->zapis() << std::endl;
        Zmienna::usun_zm("x");
        Zmienna::usun_zm("y");
    }*/
    std::cout << "\n x = " << 0.0 << " ";
    Zmienna::dodaj_zm("x", 0.0);
    std::cout << "\n y = " << 0.0 << "\n";
    Zmienna::dodaj_zm("y", 0.0);
    std::cout << w1->zapis() << " = " << w1->oblicz() << std::endl;
    std::cout << w2->zapis() << " = " << w2->oblicz() << std::endl;
    std::cout << w3->zapis() << " = " << w3->oblicz() << std::endl;
    std::cout << w4->zapis() << " = " << w4->oblicz() << std::endl;
    std::cout << w5->zapis() << " = " << w5->oblicz() << std::endl;
    Zmienna::usun_zm("x");
    Zmienna::usun_zm("y");

    std::cout << "\n x = " << 0.0 << " ";
    Zmienna::dodaj_zm("x", 0.0);
    std::cout << "\n y = " << 0.5 << "\n";
    Zmienna::dodaj_zm("y", 0.5);
    std::cout << w1->zapis() << " = " << w1->oblicz() << std::endl;
    std::cout << w2->zapis() << " = " << w2->oblicz() << std::endl;
    std::cout << w3->zapis() << " = " << w3->oblicz() << std::endl;
    std::cout << w4->zapis() << " = " << w4->oblicz() << std::endl;
    std::cout << w5->zapis() << " = " << w5->oblicz() << std::endl;
    Zmienna::usun_zm("x");
    Zmienna::usun_zm("y");

    std::cout << "\n x = " << 0.5 << " ";
    Zmienna::dodaj_zm("x", 0.5);
    std::cout << "\n y = " << 0.0 << "\n";
    Zmienna::dodaj_zm("y", 0.0);
    std::cout << w1->zapis() << " = " << w1->oblicz() << std::endl;
    std::cout << w2->zapis() << " = " << w2->oblicz() << std::endl;
    std::cout << w3->zapis() << " = " << w3->oblicz() << std::endl;
    std::cout << w4->zapis() << " = " << w4->oblicz() << std::endl;
    std::cout << w5->zapis() << " = " << w5->oblicz() << std::endl;
    Zmienna::usun_zm("x");
    Zmienna::usun_zm("y");

    std::cout << "\n x = " << 0.5 << " ";
    Zmienna::dodaj_zm("x", 0.5);
    std::cout << "\n y = " << 0.5 << "\n";
    Zmienna::dodaj_zm("y", 0.5);
    std::cout << w1->zapis() << " = " << w1->oblicz() << std::endl;
    std::cout << w2->zapis() << " = " << w2->oblicz() << std::endl;
    std::cout << w3->zapis() << " = " << w3->oblicz() << std::endl;
    std::cout << w4->zapis() << " = " << w4->oblicz() << std::endl;
    std::cout << w5->zapis() << " = " << w5->oblicz() << std::endl;
    Zmienna::usun_zm("x");
    Zmienna::usun_zm("y");

    std::cout << "\n x = " << 1.0 << " ";
    Zmienna::dodaj_zm("x", 1.0);
    std::cout << "\n y = " << 1.0 << "\n";
    Zmienna::dodaj_zm("y", 1.0);
    std::cout << w1->zapis() << " = " << w1->oblicz() << std::endl;
    std::cout << w2->zapis() << " = " << w2->oblicz() << std::endl;
    std::cout << w3->zapis() << " = " << w3->oblicz() << std::endl;
    std::cout << w4->zapis() << " = " << w4->oblicz() << std::endl;
    std::cout << w5->zapis() << " = " << w5->oblicz() << std::endl;
    Zmienna::usun_zm("x");
    Zmienna::usun_zm("y");





    Wyrazenie *w10 = new Dodaj(
            new Dodaj(
                    new Fi(),
                    new Sin(new Liczba(7))),
            new Dodaj(
                    new Ln(new Liczba(10)),
                    new Bezwzgl(new Liczba(-3))));

    Wyrazenie *w6 = new Odejmij(
            new Przeciw(new Liczba(6)),
            new Odwrot(new Liczba(3)));

    Wyrazenie *w7 = new Modulo(
            new Liczba(1),
            new Potega(
                    new Liczba(2),
                    new Liczba(2))
            );

    Wyrazenie *w8 = new Logarytm(
            new Liczba(10),
            new Liczba(10));

    /*std::cout << w5->oblicz() << "  " << w5->zapis() << std::endl;
    std::cout << w6->oblicz() << "  " << w6->zapis() << std::endl;
    std::cout << w7->oblicz() << "  " << w7->zapis() << std::endl;
    std::cout << w8->oblicz() << "  " << w8->zapis() << std::endl;*/

}
