#include <iostream>
#include <vector>
#include <algorithm>
#include "Manipulators.h"
#include <cstring>

std::ostream& operator<<(std::ostream& os, const IndexManipulator& manipulator)
{
    os << "[" << std::setw(manipulator.w) << manipulator.x << "]";
    return os;
}

std::istream& operator>>(std::istream& is, const IndexIgnore& manipulator)
{
    char c;
    int count = 0;
    while (count < manipulator.x && is.get(c) && c != '\n') {
        count++;
    }
    return is;
}

int main()
{
    std::vector<std::string> lines;
    std::string text;

    std::cout << "Oto przykladowe testy manipulatorow" << colon << std::endl;

    std::cout << "Podaj tekst" << colon;

    getline(std::cin >> ignore(3), text);
    lines.push_back(text);

    std::cout << "Podaj tekst" << colon;

    getline(std::cin >> clearLine, text);
    lines.push_back(text);

    std::cout << "Podaj tekst" << colon;

    getline(std::cin >> ignore(5), text);
    lines.push_back(text);

    std::cout << "Podaj tekst" << colon;

    getline(std::cin >> clearLine, text);
    lines.push_back(text);

    std::cout << "Przecinek:'" << comma << "'" << std::endl;

    std::cout << index(7, 7) << std::endl;

    std::sort(lines.begin(), lines.end(), [](const auto& a, const auto& b) {
        int size = std::min(a.length() , b.length());


        for (int i = 0; i < size;i++) {
            char x = tolower(a[i]);
            char y = tolower(b[i]);
            if (x < y) {
                return true;
            } else if (x > y) {
                return false;
            }
        }
        return a.length() < b.length();
    });


    int i = 0;

    for(const auto & line : lines)
    {
        std::cout << index(i, 0) <<line << std::endl;
        i++;
    }

}

