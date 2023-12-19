/*          
Julia Cygan
lista2 zadanie 1 IntStream
zadanie napisane na stronir repl.it, postaram sie zmienic to w jak najszybszym czasie
*/ 

using System;
using System.Text;

class Program {
  class IntStream
  {
    protected int actual;
    
    public IntStream()
    {
     this.actual = 0;
    }

    virtual public bool eos()
    {
      if (Int32.MaxValue >= actual)
        return false;
      else 
        return true;
    }

    virtual public int next()
    {
      if(eos() == false)
      {
        this.actual = this.actual + 1;
        return this.actual;
      }
      else
      {
        Console.WriteLine("Przekroczono zakres"); 
        return this.actual;
      }
    }

    virtual public void reset()
    {
      this.actual = 0;
    }
  }

  class PrimeStream : IntStream
  {
    public PrimeStream()
    {
      this.actual = 2;
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
    
  
    override public int next()
    {
      
        if (eos() == true)
                Console.WriteLine("Przekroczono zakres, nie mozna juz zwiekszyc liczby.");

            actual++;
            while (czy_pierwsza(actual) == false)
            {
                if (eos() == true)
                {
                    Console.WriteLine("Przekroczono zakres, nie mozna juz zwiekszyc liczby.");
                    break;
                }
              else 
              {
                actual++;
              }
            }
            return this.actual;
        
    }

    override public void reset()
    {
      this.actual = 2;
    }
  }

  class RandomStream : IntStream
  {
    private Random x;
    public RandomStream()
    {
      this.x = new Random();
    }
    override public int next()
    {
      return x.Next();
    }

    override public bool eos()
    {
      return false;
    }
  }
  class RandomWordStream
  {
    private PrimeStream p;
    private RandomStream x;

    public RandomWordStream()
    {
      p = new PrimeStream();
      x = new RandomStream();
    }

    public string next()
    {
      int n_p = p.next();
      StringBuilder s = new StringBuilder();
      
      for(int i=0;i<n_p;i++)
      {
        int los = x.next()% 26;
        s.Append((char)('a' + los));
      }
      return s.ToString();
   }
  }

  static void Main(string[] args)
  {
    var primeStream = new PrimeStream();
    var randomStream = new RandomStream();
    var randomWordStream = new RandomWordStream();

    int ile_losowych = 7;
    int ile_pierwszych = 4;
    int ile_napisow = 4;

    //randomowe
    for (int i = 0; i < ile_losowych; i++)
      Console.WriteLine(randomStream.next());

    //pierwsze
    for (int i = 0; i < ile_pierwszych; i++)
      Console.WriteLine(primeStream.next());

   // napisy o dlugoscu pierwszych
    for (int i = 0; i < ile_napisow; i++)
      Console.WriteLine(randomWordStream.next());

  }
 }
