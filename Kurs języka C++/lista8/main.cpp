#include <iostream>
#include <iomanip>
#include "Wyjatki.h++"
#include "Wymierna.h++"

using namespace Obliczenia;

int main() {
    auto w1 = Wymierna(1, 7);
    auto w2 = Wymierna(2, 3);
    std::cout << "1/7 = " << w1 << std::endl;
    std::cout << "2/3 = " << w2 << std::endl;

    auto c = Wymierna(w1 + w2);
    auto d = w1 - w2;
    auto e = w1 * w2;
    auto f = w1 / w2;
    std::cout << "1/7 + 2/3 = " << c.to_str() << std::endl;
    std::cout << "1/7 - 2/3 = " << d.to_str() << std::endl;
    std::cout << "1/7 * 2/3 = " << e.to_str() << std::endl;
    std::cout << "1/7 / 2/3 = " << f.to_str() << std::endl;

    std::cout << "w1 (1/7) += 2/3 równa się " << (w1 += w2).to_str() << std::endl;
    std::cout << "w1 -= 2/3 równa się " << (w1 -= w2).to_str() << std::endl;
    std::cout << "w1 *= 2/3 równa się " << (w1 *= w2).to_str() << std::endl;
    std::cout << "w1 /= 2/3 równa się " << (w1 /= w2).to_str() << std::endl;

    auto g = -w2;
    auto h = !w2;
    std::cout << "-(2/3) = " << g.to_str() << std::endl;
    std::cout << "!(2/3) = " << h.to_str() << std::endl;

    std::cout << "2/3 to int: " << (int)w2 << std::endl;
    std::cout << "2/3 to double: " << (double)w2 << std::endl;

    auto i = Wymierna(1,3);
    std::cout << i << std::endl;
}
