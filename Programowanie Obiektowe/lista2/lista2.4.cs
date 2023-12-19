/*          
Julia Cygan
lista2 zadanie 4 LazyIntList
zadanie napisane na stronir repl.it, postaram sie zmienic to w jak najszybszym czasie
*/       
//polecenie było nie dokońca jasne, czy może isntnieć list.element(i), gdzie i<=0
//więc zadanie jest rozwiązane dla liczb naturalnych tzn list.element(40) tworzy  //listę o elementach od 0 do 39                   
using System;        
using System.Collections.Generic;
            
  class Program
  {
    class LazyIntList
    {
      protected List<int> lista;                                                                                                                      
      protected int liczba_el;
                                                                
      public LazyIntList()
      {
        this.lista = new List<int>();
        liczba_el = 0;
      }
      virtual public int element(int number)
      {
        if (number > this.size())
        {
          int ile = number - this.size();
          for(int i = (liczba_el - 1); i <= number;i++)
          {
            this.lista.Add(i + 1);
          }
          this.liczba_el = number;
          return lista[number - 1];
        }
        else
        {
          return lista[number - 1];
        }
      }
      public int size()
      {
        return liczba_el;
      }
      
    }
    class LazyPrimeList : LazyIntList
    {
      private int el;

      public LazyPrimeList()
      {
        this.lista = new List<int>();
        this.el = 1;
      }

      override public int element(int number)
      {
        if (number > this.size())
        {
          int ile = number - this.size();
          for(int i = (liczba_el - 1); i <= number;i++)
          {
            this.el = this.el + 1;
            while (czy_pierwsza(this.el) == false){
              this.el = this.el + 1;
            }
            this.lista.Add(this.el);
          }
          this.liczba_el = number;
          return lista[number - 1];
        }
        else
        {
          return lista[number - 1];
        }
      }
      
      private bool czy_pierwsza(int liczba)
      {
        for(int i = 2;i < liczba ;i++)
        {
          if (liczba % i == 0)
          {
            return false;
          }
        }
        return true;
      }
    }
    public static void Main()
    {
      /*LazyIntList lista = new LazyIntList();
      Console.WriteLine(lista.element(40));
      Console.WriteLine(lista.size());
      Console.WriteLine(lista.element(38));
      Console.WriteLine(lista.element(1));
      Console.WriteLine(lista.element(42));
      Console.WriteLine(lista.element(40));
      Console.WriteLine(lista.size());
      LazyPrimeList lista = new LazyPrimeList();
      Console.WriteLine(lista.element(4));
      Console.WriteLine(lista.size());
      Console.WriteLine(lista.element(3));
      Console.WriteLine(lista.element(2));
      Console.WriteLine(lista.element(1));
      Console.WriteLine(lista.element(6));
      Console.WriteLine(lista.size());*/
      
    }
    
  }


