import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;

public class Tramwaj extends Pojazd
{
    protected String operator;

    public Tramwaj(String m, int ile, int rok, String o)
    {
        super(m, ile, rok);
        this.operator = o;
    }

    public String tostring()
    {
        return super.tostring() + ", operator to: " + operator;
    }

    public String getoperator() {return operator;}

    public static Tramwaj odczytajZPliku(String nazwaPliku) {
        Tramwaj tramwaj = new Tramwaj("", 0, 0,"");
        try {
            FileInputStream fileIn = new FileInputStream(nazwaPliku);
            ObjectInputStream in = new ObjectInputStream(fileIn);
            tramwaj = (Tramwaj) in.readObject();
            in.close();
            fileIn.close();
            System.out.println("Obiekt został odczytany z pliku " + nazwaPliku);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return tramwaj;
    }
}

