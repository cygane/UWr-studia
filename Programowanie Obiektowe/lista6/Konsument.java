

public class Konsument extends Thread
{
    Bufor <String> bufor;
    int saved;
    int max;

    Konsument(Bufor<String> bufor)
    {
        this.bufor = bufor;
        this.max = bufor.maximum;
        saved = 0;
    }

    @Override
    public void run()
    {
        while(true)
        {
            try
            {
                System.out.println(bufor.save());
                saved++;
            }
            catch (InterruptedException e)
            {

            }
            if (this.saved == this.max)
                return;
        }
    }


}
