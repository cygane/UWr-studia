/*
Julia Cygan
lista 5 zadanie 1
program pisany w IntelliJ IDEA
instrukcja kompilacji:
javac Main.java
java Main
*/

public class Main {
    public static void main(String[] args)
    {
        OrderedList t = new OrderedList();
        t.add_element(new Szeregowy());
        t.add_element(new Kapral());
        t.add_element(new Sierzant());
        t.add_element(new Chorazy());



        System.out.println(t.tostring());
        System.out.println("");
        System.out.println(t.get_first());

    }
}








