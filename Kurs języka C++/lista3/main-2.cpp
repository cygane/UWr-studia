#include <iostream>
#include "liczba.h++"
int main()
{
 Liczba l;
 l.set(3);
 l.set(4);
 cout<< l.get() << endl;
 l.set(5);
 cout << l.get() << endl;
 l.backup();
 cout << l.get() << endl;
 l.backup();
 cout << l.get() << endl;
 l.backup();
 cout << l.get() << endl;
 l.set(8);
 cout << l.get() << endl;
 l.backup();
 cout << l.get() << endl;
 l.set(-1);
 l.backup();
 cout << l.get() << endl;
}
