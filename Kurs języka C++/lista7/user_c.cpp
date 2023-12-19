#include "user_c.h++"
#include <iostream>
#include <time.h>
#include <cstdlib>

using namespace Gamestate;

user_c::user_c(int x) {
    w = x;
    std::vector<std::string> tmp (w * w, " ");
    b = tmp;
}

void Player::board(Gamestate::user_c &game) {
    std::string col[4] = {"A", "B", "C", "D"};
    int w = game.w;
    int s = w * w;
    int ile = 0;
    if (w == 3) {
        for (int i = 0; i <= s; i++) {
            if (i == 0) {
                std::cout << "   " << 1 << "  ";
                std::cout << " " << 2 << " ";
                std::cout << "  " << 3 << " ";
            }
            else if (i % w == 1){
                std::cout << col[ile];
                ile++;
            }
            if (i > 0)
                std::cout << " " << game.b[i - 1] << " ";
            if (i % w)
                if (i % w == 1)
                    std::cout << " |";
                else
                    std::cout << "|";
            else if (i != s)
                std::cout << "\n  ---+---+---\n";
            else
                std::cout<< std::endl;
            }
        }
    else {
        for (int i = 0; i < s; i++) {
            if (i == 0) {
                std::cout << "   " << 1 << "  ";
                std::cout << " " << 2 << " ";
                std::cout << "  " << 3 << " ";
                std::cout << "  " << 4 << " ";
            }
            else if (i % w == 1){
                std::cout << col[ile];
                ile++;
            }
            if (i > 0)
                std::cout << " " << game.b[i - 1] << " ";
            if (i % w)
                if (i % w == 1)
                    std::cout << " |";
                else
                    std::cout << "|";
            else if (i != s)
                std::cout << "\n  ---+---+---+---\n";
            else
                std::cout<< std::endl;
        }
    }
}


void Player::move(Gamestate::user_c &game) {
    int w = game.w;
    char coll, letter;
    int where, row;
    std::cout << std::endl;
    do {
        std::cout << " : Twoj ruch : ";
        std::cin >> coll;
        if (coll < 'A') {
            row = (int) (coll - '0');
            std::cin >> coll;
        }
        else{
            std::cin >> row;
        }

        if (coll > 'Z'){
            coll -= 'a';
            coll += 'A';
        }
        row--;
        std::cout << "-----------------------\n\n";
        if (w == 4)
            letter = 'D';
        else
            letter = 'C';

        if (coll > letter or row >= w or row < 0)
            throw std::invalid_argument("Niepoprawne dane");
        else if (coll == 'A')
            where = row;
        else if (coll == 'B')
            where = w + row;
        else if (coll == 'C')
            where = 2 * w + row;
        else
            where = 3 * w + row;

    } while (game.b[where] != " ");

    game.b[where] = "O";
}


bool user_c::win(std::string g) {
    bool test = false;
    int ile = 0;
    if (w == 3) {
        for (int i = 0; i < 7; i += 3) {
            test |= ((b[i] == g) && (b[i + 1] == g) && (b[i + 2] == g));
        }
        for (int i = 0; i < 3; i++) {
            test |= ((b[i] == g) && (b[i + 3] == g) && (b[i + 6] == g));
        }
        test |= ((b[0] == g) && (b[4] == g) && (b[8] == g));
        test |= ((b[2] == g) && (b[4] == g) && (b[6] == g));

        for(int i = 0; i< 9; i++ ){
            if (b[i] != " ")
                ile++;
        }

        if (test) {
            std::cout << std::endl;
            std::cout << "Gracz: " << g << " wygrał"<< std::endl;
            return true;
        }

        if(ile == 9) {
            std::cout << std::endl;
            std::cout << "Tym razem remis";
            return true;
        }
        return false;
    }
    else{
        for (int i = 0; i < 13; i += 3) {
            test |= ((b[i] == g) && (b[i + 1] == g) && (b[i + 2] == g) && (b[i + 3] == g));
        }
        for (int i = 0; i < 4; i++) {
            test |= ((b[i] == g) && (b[i + 4] == g) && (b[i + 8] == g) && (b[i + 12] == g));
        }
        test |= ((b[0] == g) && (b[5] == g) && (b[10] == g) && (b[15] == g));
        test |= ((b[3] == g) && (b[6] == g) && (b[9] == g) && (b[12] == g));

        if (test) {
            std::cout << std::endl;
            std::cout << "Gracz: " << g << " wygrał" << std::endl;
            return true;
        }

        for(int i = 0; i< 16; i++ ){
            if (b[i] != " ")
                ile++;
        }

        if(ile == 16) {
            std::cout << std::endl;
            std::cout << "Tym razem remis";
            return true;
        }
        return false;
    }
}

void AI::ai(Gamestate::user_c &game) {
    int w = game.w;
    srand(time(0));
    int tmp;
    int s = w * w - 1;
    do {
        tmp = rand() % s;
    } while(game.b[tmp] != " ");

    game.b[tmp] = "X";
    Player::board(game);
}

