public class Sierzant implements T
{
    @Override
    public int get_t()
    {
        return 30;
    }

    @Override
    public int compareTo(T toCompare)
    {
        return Integer.compare(this.get_t(), toCompare.get_t());
    }
}
