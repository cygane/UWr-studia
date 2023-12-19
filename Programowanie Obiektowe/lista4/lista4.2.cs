/*
Julia Cygan
lista 4 zadanie 2
zadanie pisane na repl.it
*/
using System;
using System.Collections;              
using System.Collections.Generic; 

class Program {
  class Enumerator : IEnumerator<string>
  {
    private WordsFib x;
    private int count;
    private string element;

    public Enumerator(WordsFib slowa)
    {
      this.x = slowa;
      this.count = 1;
      this.element = "";
    }

    public bool MoveNext()
    {
      if (this.count > x.Limit)
      {
        return false;
      }
      this.element = x.Return(this.count);
      this.count ++;
      return true;
    }

    public void Dispose()
    {
      
    }

    public string Current
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
  class WordsFib : IEnumerable<string>
  {
    private int counter;
    private int limit;
    List<string> words;

    public int Limit
    {
      get
      {
        return this.limit;
      }
    }

    public WordsFib(int limit) 
    {
      this.limit = limit;
      this.words = new  List<string>();
      this.counter = 1;
      this.words.Add("b");
      this.words.Add("a");
     
    }

    private void Extension(int n)
    {
      if(n > limit){
        return;
      }
       
      for(int i = this.counter + 1;i < n;i++)
      {
        this.words.Add(this.words[i-1] + this.words[i-2]);
      }
      this.counter = n-1;
      
    }

    public string Return(int n)
    {
      if(n > limit){
        return "error";
      }
      if (n-1 > this.counter){
        Extension(n);
      }
      return this.words[n - 1];
    }

    public IEnumerator<string> GetEnumerator()
    {
      return new Enumerator(this);
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
      return new Enumerator(this);
    }
    
  }

  public static void Main()
  {
    WordsFib sf = new WordsFib(8);
    foreach(string s in sf)
       Console.WriteLine(s);
  }
}