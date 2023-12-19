/*
Julia Cygan
lista 6 zadanie 3
program został napisany w Intellij IDEA od jetbrains
 */
public class Main {
    public static void main(String[] args)
    {
        Comparable[] arr = new Comparable[]{1, 0 , 8 , 16, -5 , -1, 14};
        MergeSort sort = new MergeSort(arr);

        sort.sort();

        sort.wypisz();
    }
}