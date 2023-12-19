#include "Wyjatki.h++"

wyjatek_wymierny::wyjatek_wymierny(const std::string message) : std::logic_error(message){}

przekroczenie_zakresu::przekroczenie_zakresu(const std::string message) : wyjatek_wymierny(message){}

dzielenie_przez_0::dzielenie_przez_0(const std::string message) : wyjatek_wymierny(message){}

zla_definicja::zla_definicja(const std::string message) : wyjatek_wymierny(message){}
