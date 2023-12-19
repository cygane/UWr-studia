using System;
/*
Julia Cygan
lista 3 zadanie 2
polecenia, których uzyto do skompilowania:
 mcs -t:library slownik.cs 
 mcs program.cs -r:slownik.dll
 mono programSlownik.exe
*/

class Program {

    public static void Main(string[] args)
    {
        MyDictionary<int, string> dict = new MyDictionary<int, string>();
        dict.add(1,"a");
        dict.add(2,"b");
        dict.add(3, "c");
        dict.add(4, "d");
        dict.add(5, "e");
        Console.WriteLine(dict.search(1));
        Console.WriteLine(dict.search(2));
        Console.WriteLine(dict.search(3));
        Console.WriteLine(dict.search(4));
        Console.WriteLine(dict.search(5));
        Console.WriteLine(dict.search(11));
        Console.WriteLine("po usuwaniu");
        dict.delete(4);
        Console.WriteLine(dict.search(1));
        Console.WriteLine(dict.search(2));
        Console.WriteLine(dict.search(3));
        Console.WriteLine(dict.search(4));
        Console.WriteLine(dict.search(5));
        dict.add(1,"x");
    }
}