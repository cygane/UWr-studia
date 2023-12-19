public class Kapral implements T
{
    @Override
    public int get_t()
    {
        return 20;
    }

    @Override
    public int compareTo(T toCompare)
    {
        return Integer.compare(this.get_t(), toCompare.get_t());
    }
}

