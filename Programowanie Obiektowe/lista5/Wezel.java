public class Wezel
{
    static class dodawanie extends Expression
    {
        Expression a;
        Expression b;

        public dodawanie(Expression a1, Expression b1)
        {
            a = a1;
            b = b1;
        }

        public int evaluate()
        {
            return  a.evaluate() + b.evaluate();
        }

        String tostring()
        {
            return "(" + a.tostring() + "+" + b.tostring() + ")";
        }

    }

    class odejmowanie extends Expression
    {
        Expression a;
        Expression b;

        public odejmowanie(Expression a1, Expression b1)
        {
            a = a1;
            b = b1;
        }

        public int evaluate()
        {
            return a.evaluate() - b.evaluate();
        }

        String tostring()
        {
            return "(" + a.tostring() + "-" + b.tostring() + ")";
        }
    }

    static class mnozenie extends Expression
    {
        Expression a;
        Expression b;

        public mnozenie(Expression a1, Expression b1)
        {
            a = a1;
            b = b1;
        }

        public int evaluate()
        {
            return a.evaluate() * b.evaluate();
        }

        String tostring()
        {
            return "(" + a.tostring() + "*" + b.tostring() + ")";
        }
    }

    static class dzielenie extends Expression
    {
        Expression a;
        Expression b;

        public dzielenie(Expression a1, Expression b1)
        {
            a = a1;
            b = b1;
        }

        public int evaluate() throws ArithmeticException
        {
            if (b.evaluate() != 0)
            {
                return a.evaluate() / b.evaluate();
            }
            else
            {
                throw new ArithmeticException("Nie można podzielić tego wyrażenia");
            }
        }

        String tostring()
        {
            return "(" + a.tostring() + "/" + b.tostring() + ")";
        }
    }
}
