#include "liczba.h++"

Liczba::Liczba()
{
    tablica = new double[length];

    tablica[0] = 0;
    counter = 1;
    backup_counter = 0;
}

Liczba::Liczba(const Liczba& l)
{
    tablica[0] = l.tablica[0];
    counter = l.counter;
}


Liczba::Liczba(double val)
{
    tablica[counter] = val;
    counter ++;
    counter %= length;

}

Liczba::Liczba(Liczba &&l)
{
    tablica = l.tablica;
    counter ++;
    counter %= length;
}

Liczba::~Liczba()
{
    if (tablica != nullptr) {
        delete[] tablica;
    }
}

  Liczba& Liczba :: operator =(Liczba &&l)
  {
    tablica = l.tablica;
    tablica[0] = l.tablica[0];
    counter = l.counter;
    backup_counter = l.backup_counter;
    return *this;
  }

  Liczba& Liczba :: operator =(Liczba &l)
  {
      set(l.get());
      return *this;
  }


void Liczba::set(double value)
{
    backup_counter++;
    tablica[counter] = value;
    counter ++;
    counter %= length;
}

double Liczba::get()
{
    int tmp;
    if(counter == 0) tmp = length - 1;
    else tmp = counter - 1;
    return tablica[tmp];
}

void Liczba::backup()
{

  if (backup_counter == 1)
  {
      cout << "Nie możesz się już cofnąć w historii" << endl;
  }
  else
  {
    counter--;
    if (counter < 0) counter = length - 1;
  }
  if (backup_counter > 1) backup_counter --;
}


