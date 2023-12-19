/*
Julia Cygan
lista 6 zadanie 3
program został napisany w Intellij IDEA od jetbrains
 */

public class Main {
    public static void main(String[] args) throws Exception
    {
        Bufor<String> bufor = new Bufor<String>(7);
        Producent p = new Producent(bufor);
        Konsument k = new Konsument(bufor);

        p.start();
        k.start();

    }
}