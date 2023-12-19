/*
Julia Cygan
lista 4 zadanie 1
zadanie pisane na repl.it
*/
using System;
using System.Collections;               
using System.Collections.Generic;  

interface ListCollection
{
  int element(int number);
  int size();
}

class Program
{
  class Enumerator : IEnumerator<int>
  {
    private LazyIntList x;
    int element;
    int count;

    public Enumerator(LazyIntList lista)
    {
      this.x = lista;
      this.count = 1;
      this.element = 0;
    }

    public bool MoveNext()
    {
      if (this.count > x.liczba_el)
      {
        return false;
      }
      this.element = x.element(this.count);
      this.count ++;
      return true;
    }
    public void Dispose()
    {
      
    }

    public int Current
    {
      get
      {
        return this.element;
      }
    }

    object IEnumerator.Current => Current;
    
    public void Reset()
    {
      this.count = 1;
    }
  }
  public class LazyIntList : IEnumerable<int>, ListCollection
    {
      protected List<int> lista;                                                            
      public int liczba_el;
                                                                
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

      public int Length
      {
        get
        {
          return size();
        }
      }

      public override string ToString()
      {
        if(this.liczba_el == 0)
        {
          return null;
        }
        return lista[liczba_el - 1].ToString();
      }

      public IEnumerator<int> GetEnumerator()
    {
      return new Enumerator(this);
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
      return new Enumerator(this);
    }

    public int this[int index]
      {
        get
        {
          return this.element(index);
        }
      }
      
    }
    class LazyPrimeList : LazyIntList, ListCollection
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
    LazyIntList lista = new LazyIntList();
    int x = lista.element(10);
    foreach(int s in lista)
      Console.WriteLine(s);

    Console.WriteLine(lista);
    Console.WriteLine(lista.Length);
  }
}