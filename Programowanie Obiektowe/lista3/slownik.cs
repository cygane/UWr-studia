using System;
/*
Julia Cygan
lista 3 zadanie 2
*/
public class MyDictionary<K,V>
{
    K[] klucz;
    V[] wartosc;
    int dlugosc; 
    int ile_el; 
    int licznik; 

    public MyDictionary() 
    {
        this.dlugosc = 10;
        this.klucz = new K[dlugosc];
        this.wartosc = new V[dlugosc];
        this.ile_el = 0;
        this.licznik = 0;
    }

    public void add(K key, V value)
    {
        int mozna = 1;
        for(int i=0;i<this.ile_el;i++)
        {
        if(this.klucz[i].Equals(key))
        {
            mozna = 0;
        }
        }
        if (mozna == 1){
        if (this.licznik >= 9)
        {
            Array.Resize(ref this.klucz, this.dlugosc + this.klucz.Length); 
            Array.Resize(ref this.wartosc, this.dlugosc + this.wartosc.Length);
            licznik = -1;
        }
        this.klucz[ile_el] = key; 
        this.wartosc[ile_el] = value;
        this.ile_el += 1;
        this.licznik += 1;
        }
        else Console.WriteLine("Taki klucz już istnieje");
        }
        


    public V search(K key)
    {

        for(int i=0;i<this.ile_el;i++)
        {
        if(this.klucz[i].Equals(key))
        {
            
            return this.wartosc[i];
        }
        }
        return default(V);
    }

    public void delete(K key)
    {
        V[] n_war = new V[ile_el - 1];
        K[] n_klu = new K[ile_el - 1];
        int j = 0;
        for(int i=0;i<this.ile_el;i++)
        {
        if (this.klucz[i].Equals(key) != true)
        {
            n_klu[j] = klucz[i];
            n_war[j] = wartosc[i];
            j = j + 1;
        }
        }
        this.klucz = n_klu;
        this.wartosc = n_war;
        this.ile_el -= 1;
    }
}
  