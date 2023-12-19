import java.util.Hashtable;
public class Lisc
{
    static class Zmienna extends Expression
    {
        String name;
        static Hashtable<String,Integer> array = new Hashtable<String,Integer>();
        public Zmienna(String n)
        {
            this.name = n;
        }

        public int evaluate()
        {
            return array.get(name);
        }

        public String tostring()
        {
            return name;
        }
    }

    static class Stala extends Expression
    {
        int value;
        public Stala(int v)
        {
            this.value = v;
        }

        public int evaluate()
        {
            return value;
        }

        public String tostring()
        {
            return String.valueOf(value);
        }
    }
}

