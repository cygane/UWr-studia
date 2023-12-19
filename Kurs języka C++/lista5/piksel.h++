#pragma once
#include <iostream>
#include <stdexcept>

class piksel
{
protected:
    int x;
    int y;
    static const int roz_x = 960;
    static const int roz_y = 720;

public:
    piksel();
    piksel(int x, int y);
    int get_up();
    int get_down();
    int get_left();
    int get_right();
    int get_x();
    int get_y();
};



