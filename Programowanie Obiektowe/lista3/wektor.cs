using System;
/*
Julia Cygan
lista 3 zadanie 4
*/

public class Vector
{
  private float[] w;
  private int wymiar;

  public Vector(int n,float[] x)
  {
    this.w = new float[n];
    this.wymiar = n;
    for(int i = 0;i<this.wymiar;i++)
    {
      this.w[i] = x[i];
    }
  }

  public float[] wypisz()
  {
    for(int i=0;i<this.wymiar;i++)
    {
      Console.Write(this.w[i] + " ");
    }
    return this.w;
  }

  public static Vector operator +(Vector v,Vector v1)
  {
    if (v.wymiar == v1.wymiar)
    {
      Vector x = new Vector(v.wymiar,v.w);
      for(int i=0;i<v.wymiar;i++)
      {
        x.w[i] = v.w[i] + v1.w[i];
      }
      return x;
    }
    else
    {
      Console.WriteLine("Wektory mają inne wymiary, dodawanie niemożliwe ");
      return v;
    }
  }

  public static Vector operator *(Vector v,float s)
  {
    Vector x = new Vector(v.wymiar,v.w);
    for(int i=0;i<v.wymiar;i++)
    {
      x.w[i] = v.w[i] * s;
    }
    return x;
  }

  public static Vector operator *(Vector v,Vector v1)
  {
    if (v.wymiar == v1.wymiar)
    {
      Vector x = new Vector(v.wymiar,v.w);
      for(int i=0;i<v.wymiar;i++)
      {
        x.w[i] = v.w[i] * v1.w[i];
      }
      return x;
    }
    else
    {
      Console.WriteLine("Wektory mają inne wymiary, mnożenie niemożliwe ");
      return v;
    }
  }
  

  public float norma()
  {
    Vector x = new Vector(this.wymiar,this.w);
    Vector z = new Vector(this.wymiar,this.w);
    z = x*x;
    float suma = 0;
    for(int i=0;i<this.wymiar;i++)
    {
      suma += z.w[i];
    }
    return (float)Math.Sqrt(suma);
  }
  
}