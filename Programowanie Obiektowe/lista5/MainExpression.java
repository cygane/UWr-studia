/*
Julia Cygan
lista 5 zadanie 1
program pisany w IntelliJ IDEA
instrukcja kompilacji:
javac MainExpression.java
java MainExpression
*/


import java.util.Hashtable;
public class MainExpression
{
    public static void main(String[] args)
    {
        Hashtable<String, Integer> varArray = new Hashtable<String, Integer>();

        varArray.put("x", 3);
        varArray.put("z", 5);
        varArray.put("y", 2);

        System.out.println("x = " + varArray.get("x"));
        System.out.println("y = " + varArray.get("y"));
        System.out.println("z = " + varArray.get("z"));

        Lisc.Zmienna.array = varArray;


        Expression a = new Wezel.dodawanie(new Lisc.Stala(2), new Lisc.Zmienna("x"));
        a = new Wezel.mnozenie(new Lisc.Stala(6), a);
        a = new Wezel.dzielenie(a, new Lisc.Zmienna("z"));
        a = new Wezel.dodawanie(a, new Lisc.Stala(1));
        System.out.println(a.tostring() + " = " + a.evaluate());

        Expression b = new Wezel.dodawanie(new Lisc.Zmienna("y"), new Lisc.Zmienna("x"));
        b = new Wezel.mnozenie(b, new Lisc.Zmienna("z"));
        System.out.println(b.tostring() + " = " + b.evaluate());

        Expression c = new Wezel.dzielenie(new Lisc.Stala(0), new Lisc.Stala(4));
        c = new Wezel.dzielenie(c, new Lisc.Stala(0));
        System.out.println(c.tostring() + " = " + c.evaluate());
    }
}