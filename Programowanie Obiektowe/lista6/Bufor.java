import java.util.ArrayList;
public class Bufor<T>
{
    public int maximum;
    ArrayList<T> tablica;
    int ile;
    public  Bufor(int maximum)
    {
        this.maximum = maximum;
        this.tablica = new ArrayList<T>(maximum);
        ile = 0;
    }

    public boolean Pelny()
    {
        return (ile == maximum);
    }

    public boolean Pusty()
    {
        return (ile == 0);
    }

    public synchronized T save() throws InterruptedException
    {
        while (this.Pusty())  wait();
        ile--;
        notify();
        return tablica.remove(0);
    }

    public synchronized void insert (T elem) throws InterruptedException
    {
        while(this.Pelny()) wait();
        tablica.add(elem);
        ile++;
        notify();
        return;
    }

}
