

public class Producent extends Thread
{
    Bufor<String> bufor;
    int max;
    int produced;

    public Producent(Bufor<String> bufor)
    {
        this.max = bufor.maximum;
        this.bufor = bufor;
        produced = 0;
    }

    @Override
    public void run()
    {
        while(true)
        {
            try
            {
                bufor.insert(String.valueOf(produced));
                produced++;
            }
            catch (InterruptedException e)
            {

            }
            if (this.produced == this.max)
                return;
        }
    }
}
