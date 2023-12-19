import java.io.Serializable;
import java.io.*;

public class Pojazd implements Serializable {
    protected String marka;
    protected int ile_osob;
    protected int rocznik;

    public Pojazd(String m, int ile, int rok)
    {
        this.marka = m;
        this.ile_osob = ile;
        this.rocznik = rok;
    }

    public String tostring()
    {
        return "Pojazd marki : " + marka +", wyprodukowany w roku : " + rocznik + ", pomieści " + ile_osob + " osób ";
    }

    public String getmarka() { return marka;}
    public int getile_osob() { return ile_osob;}
    public int getrocznik() { return rocznik;}

    public void zapiszDoPliku(String nazwaPliku) {
        try {
            FileOutputStream fileOut = new FileOutputStream(nazwaPliku);
            ObjectOutputStream out = new ObjectOutputStream(fileOut);
            out.writeObject(this);
            out.close();
            fileOut.close();
            System.out.println("Obiekt został zapisany do pliku " + nazwaPliku);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static Pojazd odczytajZPliku(String nazwaPliku) {
       Pojazd pojazd = new Pojazd("", 0, 0);
        try {
            FileInputStream fileIn = new FileInputStream(nazwaPliku);
            ObjectInputStream in = new ObjectInputStream(fileIn);
            pojazd = (Pojazd) in.readObject();
            in.close();
            fileIn.close();
            System.out.println("Obiekt został odczytany z pliku " + nazwaPliku);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return pojazd;
    }

}
