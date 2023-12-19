import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;

public class Samochod extends Pojazd
{
    protected int moc;


    public Samochod(String m, int ile, int rok, int moc)
    {
        super(m, ile, rok);
        this.moc = moc;
    }

    public String tostring()
    {
        return super.tostring() + ", jego moc to : " + moc;
    }

    public int getmoc() {return moc;}

    public static Samochod odczytajZPliku(String nazwaPliku) {
        Samochod samochod = new Samochod("", 0, 0,0);
        try {
            FileInputStream fileIn = new FileInputStream(nazwaPliku);
            ObjectInputStream in = new ObjectInputStream(fileIn);
            samochod = (Samochod) in.readObject();
            in.close();
            fileIn.close();
            System.out.println("Obiekt został odczytany z pliku " + nazwaPliku);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return samochod;
    }

}
