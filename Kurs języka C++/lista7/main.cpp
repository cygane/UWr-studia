#include <iostream>
#include "user_c.h++"

int main() {
    int x;
    std::cout <<"Gra w kółko i krzyzyk"<< std::endl;
    std::cout <<"Wybierz planszę: "<< std::endl;
    std::cin>>x;
    if (x > 4 or x < 3)
        throw std::invalid_argument("Możesz wybrać planszę 3x3 albo 4x4");
    else {
        Gamestate::user_c plansza = Gamestate::user_c(x);
        Player::board(plansza);
        while (not(plansza.win("O") or plansza.win("X"))) {
            Player::move(plansza);
            AI::ai(plansza);
        }
    }

}
