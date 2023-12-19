#include "Wymierna.h++"
#include <stdexcept>
#include "Wyjatki.h++"
#include <iomanip>
#include <vector>

namespace Obliczenia {
    Wymierna::Wymierna() {
        this->licz = 0;
        this->mian = 1;
    }

    Wymierna::Wymierna(int li, int mi) {
        if (mi == 0) throw zla_definicja("mianownik musi być rózny od 0");
        if (mi < 0) {
            this->mian = -mi;
            this->licz = -li;
        } else {
            this->licz = li;
            this->mian = mi;
        }
        skroc();
    }

    Wymierna::Wymierna(const int l) : Wymierna(l, 1) {}

    void Wymierna::skroc() {
        if (licz == 0) {
            mian = 1;
            return;
        }
        int a = licz, b = mian, t;
        if (b < 0) {
            a = -a;
            b = -b;
        }
        while (b != 0) {
            t = b;
            b = a % b;
            a = t;
        }
        licz /= a;
        mian /= a;
    }

    Wymierna operator-(Wymierna w) {
        w.licz *= (-1);
        return w;
    }

    Wymierna operator!(Wymierna w) {
        if (w.licz == 0)
            throw dzielenie_przez_0("Nie można odwrócic ułamka, z powodu licznika równego 0");

        int tmp = w.licz;
        w.licz = w.mian;
        w.mian = tmp;
        w.skroc();
        if (w.mian < 0) {
            w.mian *= (-1);
            w.licz *= (-1);
        }
        return w;
    }

    Wymierna::operator double() {
        return double(this->licz) / double(this->mian);
    }

    Wymierna::operator int() {
        return this->licz / this->mian;
    }

    Wymierna operator+(Wymierna &w, Wymierna &x) {
        long long int tmpl = w.licz * x.mian + x.licz * w.mian;
        long long int tmpm = w.mian * x.mian;
        if (tmpl > INT_MAX || tmpl < INT_MIN || tmpm > INT_MAX || tmpm < INT_MIN)
            throw przekroczenie_zakresu("Prezkroczono zakres");

        Wymierna res(w.licz * x.mian + x.licz * w.mian,
                     w.mian * x.mian);
        res.skroc();
        return res;
    }

    Wymierna operator- (Wymierna &w, Wymierna &x) {
        long long int tmpl = w.licz * x.mian - x.licz * w.mian;
        long long int tmpm = w.mian * x.mian;
        if (tmpl > INT_MAX || tmpl < INT_MIN || tmpm > INT_MAX || tmpm < INT_MIN)
            throw przekroczenie_zakresu("Prezkroczono zakres");

        Wymierna res(w.licz * x.mian - x.licz * w.mian,
                     w.mian * x.mian);
        res.skroc();
        return res;
    }

    Wymierna operator*(Wymierna &w, Wymierna &x) {
        long long int tmpl = w.licz * x.licz;
        long long int tmpm = w.mian * x.mian;
        if (tmpl > INT_MAX || tmpl < INT_MIN || tmpm > INT_MAX || tmpm < INT_MIN)
            throw przekroczenie_zakresu("Prezkroczono zakres");

        Wymierna res(w.licz * x.licz,
                     w.mian * x.mian);
        res.skroc();
        return res;
    }

    Wymierna operator/(Wymierna &w, Wymierna &x) {
        if (x.licz == 0)
            throw dzielenie_przez_0("Licznik jest równy 0, więc nie można pomnożyc przez odwrotnosc");

        long long int tmpl = w.licz * x.mian;
        long long int tmpm = w.mian * x.licz;
        if (tmpl > INT_MAX || tmpl < INT_MIN || tmpm > INT_MAX || tmpm < INT_MIN)
            throw przekroczenie_zakresu("Prezkroczono zakres");

        Wymierna res(w.licz * x.mian, w.mian * x.licz);
        res.skroc();
        return res;
    }

    Wymierna &Wymierna::operator+=(const Wymierna &w) {
        long long int tmpl = this->licz * w.mian + w.licz * this->mian;
        long long int tmpm = w.mian * this->mian;
        if (tmpl > INT_MAX || tmpl < INT_MIN || tmpm > INT_MAX || tmpm < INT_MIN)
            throw przekroczenie_zakresu("Prezkroczono zakres");

        this->licz = this->licz * w.mian + w.licz * this->mian;
        this->mian = w.mian * this->mian;
        skroc();
        return *this;
    }

    Wymierna &Wymierna::operator*=(const Wymierna &w) {
        long long int tmpl = this->licz * w.licz;
        long long int tmpm = this->mian * w.mian;
        if (tmpl > INT_MAX || tmpl < INT_MIN || tmpm > INT_MAX || tmpm < INT_MIN)
            throw przekroczenie_zakresu("Prezkroczono zakres");

        this->licz = this->licz * w.licz;
        this->mian = this->mian * w.mian;
        skroc();
        return *this;
    }

    Wymierna &Wymierna::operator-=(const Wymierna &w) {
        long long int tmpl = this->licz * w.mian - w.licz * this->mian;
        long long int tmpm = this->mian * w.mian;
        if (tmpl > INT_MAX || tmpl < INT_MIN || tmpm > INT_MAX || tmpm < INT_MIN)
            throw przekroczenie_zakresu("Prezkroczono zakres");

        this->licz = this->licz * w.mian - w.licz * this->mian;
        this->mian = this->mian * w.mian;
        skroc();
        return *this;
    }

    Wymierna &Wymierna::operator/=(const Wymierna &w) {
        if (w.licz == 0)
            throw dzielenie_przez_0("Licznik jest równy 0, więc nie można pomnożyc przez odwrotnosc");

        long long int tmpl = this->licz * w.mian;
        long long int tmpm = this->mian * w.licz;
        if (tmpl > INT_MAX || tmpl < INT_MIN || tmpm > INT_MAX || tmpm < INT_MIN)
            throw przekroczenie_zakresu("Prezkroczono zakres");

        this->licz = this->licz * w.mian;
        this->mian = this->mian * w.licz;
        skroc();
        return *this;
    }

    std::ostream &operator<<(std::ostream &wyj, Wymierna &w) {
        int l = w.get_licz();
        int m = w.get_mian();
        std::string integer = std::to_string(l / m);
        if (l < 0) {
            l *= (-1);
        }
        int rest = l % m;

        if (rest == 0) {
            wyj << integer;
            return wyj;
        }

        std::string result = integer + ".";
        std::vector<int> pozycje;

        while (rest > 0) {
            rest *= 10;
            for (int i = 0; i < pozycje.size(); i++) {
                if (pozycje[i] == rest / m) {
                    result.insert(integer.length() + i + 1, "(");
                    result += ")";
                    rest = 0;
                    break;
                }
            }
            if (rest != 0) {
                result += std::to_string(rest / m);
            }

            pozycje.push_back(rest / m);
            rest %= m;
        }

        wyj << result;
        return wyj;
    }


    std::string Wymierna::to_str() {
        return std::to_string(this->get_licz()) + '/' + std::to_string(this->get_mian());

    }
}


