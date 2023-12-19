#include <iostream>
#include "globalne.h++"
#include "kolor.h++"
#include "kolor_nazwany.h++"
#include "kolortransparentny.h++"
#include "piksel.h++"
#include "pikselkolorowy.h++"
#include "kolornt.h++"
using namespace std;

int main() {
    cout<<"Testowanie klasy kolor"<<endl;
    kolor k1(5, 10 ,15);
    //kolor k2(256, 0 , -5);
    kolor k3(0, 8 , 50);
    cout<< "red k1:"<<k1.get_r()<<endl;
    cout<< "green k1:"<<k1.get_g()<<endl;
    cout<< "blue k1:"<<k1.get_b()<<endl;
    k1.set_r(10);
    k1.set_g(9);
    k1.set_b(8);
    cout<< "red k1:"<<k1.get_r()<<endl;
    cout<< "green k1:"<<k1.get_g()<<endl;
    cout<< "blue k1:"<<k1.get_b()<<endl;
    k1.darker(0.3);
    cout<< "red k1:"<<k1.get_r()<<endl;
    cout<< "green k1:"<<k1.get_g()<<endl;
    cout<< "blue k1:"<<k1.get_b()<<endl;
    k1.lighter(0.7);
    cout<< "red k1:"<<k1.get_r()<<endl;
    cout<< "green k1:"<<k1.get_g()<<endl;
    cout<< "blue k1:"<<k1.get_b()<<endl;
    cout <<"red po mixie: " <<kolor::mix(k1,k3).get_r() << endl;
    cout <<"green po mixie: " <<kolor::mix(k1,k3).get_g() << endl;
    cout <<"blue po mixie: " <<kolor::mix(k1,k3).get_b() << endl;
    cout<<"Testowanie klasy kolornazwany"<<endl;
    kolor_nazwany k7(5, 10, 15, "jhdjha");
    cout<<"Testowanie klasy kolortransparentny"<<endl;
    kolor_transparentny k10(8,7,3,15);
    cout<<"Testowanie klasy kolornt"<<endl;
    kolornt k13(5, 7, 13,"jkj",10);
    cout<<"Testowanie klasy piksel"<<endl;
    piksel p1(10,15);
    cout<<"x p1:"<<p1.get_x()<<endl;
    cout<<"y p1:"<<p1.get_y()<<endl;
    cout<<"up: "<<p1.get_up()<<endl;
    cout<<"down: "<<p1.get_down()<<endl;
    cout<<"left: "<<p1.get_left()<<endl;
    cout<<"right: "<<p1.get_right()<<endl;
    cout<<"Testowanie klasy pikselkolorowy"<<endl;
    pikselkolorowy p2(10,20,k10);
    p2.move(10,15);
    piksel p3(30,49);
    cout<<"Testowanie globalnych funkcji"<<endl;
    cout<<"odleglosc 1"<< odleglosc(p1,p3)<<endl;
    cout<<"odleglosc 2"<< odleglosc(&p1,&p3)<<endl;
}
