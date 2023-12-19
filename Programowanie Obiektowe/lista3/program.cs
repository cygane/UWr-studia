using System;
/*
Julia Cygan
lista 3 zadanie 4
polecenia, których uzyto do skompilowania:
 mcs -t:library wektor.cs 
 mcs program.cs -r:wektor.dll
 mono program.exe
*/
class Program {

  public static void Main()
  {
    float []x = {1,2,3};
    float []y = {1,2,1};
    float s = 4;
    Vector v1 = new Vector(3,x);
    Vector v2 = new Vector(3,y);
    Console.WriteLine((v1+v2).wypisz());
    Console.WriteLine((v1*v2).wypisz());
    Console.WriteLine(v1.norma());
    Console.WriteLine((v1*s).wypisz());
    float []z = {1,2};
    Vector v3 = new Vector(2,z);
    Console.WriteLine((v1+v3).wypisz());
    Console.WriteLine((v1*v3).wypisz());

  }
}