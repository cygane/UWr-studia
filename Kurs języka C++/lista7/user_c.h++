#pragma once
#include <string>
#include <vector>
namespace Gamestate {
    class user_c {
    public:
        int w;
        std::vector<std::string> b;
        user_c(int x);
        bool win(std::string g);
    };
}

namespace Player {
    void board(Gamestate::user_c &game);
    void move(Gamestate::user_c &game);
}
namespace AI {
    void ai(Gamestate::user_c &game);
}