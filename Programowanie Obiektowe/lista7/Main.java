/*
Julia Cygan
lista 7
 */
import javax.swing.*;
import java.awt.*;

public class Main {
    public static void main(String[] args)
    {
        Pojazd pojazd1 = new Pojazd("BMW", 4, 2010);
        pojazd1.zapiszDoPliku("pojazd1.dat");
        PojazdSwing pojazdSwing = new PojazdSwing(pojazd1, "pojazd1");
        Pojazd pojazd2 = Pojazd.odczytajZPliku("pojazd1.dat");
        System.out.println("Odczytany pojazd: " + pojazd2.tostring());

        Tramwaj tramwaj1 = new Tramwaj("Solaris", 100, 2010,"MZK Bydgoszcz");
        tramwaj1.zapiszDoPliku("tramwaj1.dat");
        TramwajSwing tramwajSwing = new TramwajSwing(tramwaj1, "tramwaj1");
        Tramwaj tramwaj2 = Tramwaj.odczytajZPliku("tramwaj1.dat");
        System.out.println("Odczytany pojazd: " + tramwaj2.tostring());

        Samochod samochod1 = new Samochod("Solaris", 100, 2010,250);
        samochod1.zapiszDoPliku("samochod1.dat");
        SamochodSwing samochodSwing = new SamochodSwing(samochod1, "samochod1");
        Samochod samochod2 = Samochod.odczytajZPliku("samochod1.dat");
        System.out.println("Odczytany pojazd: " + samochod2.tostring());

       /*Pojazd pojazd = new Pojazd("Mercedes", 5, 2022);
        PojazdSwing pojazdSwing = new PojazdSwing(pojazd, "mojPojazd");
        pojazdSwing.textField1.setText(pojazd.getmarka());
        pojazdSwing.textField2.setText(String.valueOf(pojazd.getile_osob()));
        pojazdSwing.textField3.setText(String.valueOf(pojazd.getrocznik()));
        pojazdSwing.textArea1.append(pojazd.tostring() + "\n");
        Samochod samochod1 = new Samochod("BMW", 5, 2010, 200);
        SamochodSwing samochodSwing1 = new SamochodSwing(samochod1, "samochod1");

        samochodSwing1.textField1.setText(samochod1.getmarka());
        samochodSwing1.textField2.setText(String.valueOf(samochod1.getile_osob()));
        samochodSwing1.textField3.setText(String.valueOf(samochod1.getrocznik()));
        samochodSwing1.textField4.setText(String.valueOf(samochod1.getmoc()));

        samochodSwing1.textArea1.append(samochod1.tostring() + "\n");

        Tramwaj tramwaj1 = new Tramwaj("Solaris", 100, 2005, "MZK Bydgoszcz");
        TramwajSwing tramwajSwing1 = new TramwajSwing(tramwaj1, "tramwaj1");

        tramwajSwing1.textField1.setText(tramwaj1.getmarka());
        tramwajSwing1.textField2.setText(String.valueOf(tramwaj1.getile_osob()));
        tramwajSwing1.textField3.setText(String.valueOf(tramwaj1.getrocznik()));
        tramwajSwing1.textField4.setText(tramwaj1.getoperator());

        tramwajSwing1.textArea1.append(tramwaj1.tostring() + "\n");*/

    }
}