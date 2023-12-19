#pragma once

#include <stdexcept>
#include <string>

class wyjatek_wymierny : public std::logic_error {
public:
    wyjatek_wymierny(const std::string message);
};

class przekroczenie_zakresu : public wyjatek_wymierny {
public:
    przekroczenie_zakresu(const std::string message);
};

class dzielenie_przez_0 : public wyjatek_wymierny {
public:
    dzielenie_przez_0(const std::string message);
};

class zla_definicja : public wyjatek_wymierny {
public:
    zla_definicja(const std::string message);
};



