import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class OrderedList
{
    List<T> t_array;

    OrderedList()
    {
        t_array = new ArrayList<T>();
    }

    void add_element(T elem)
    {
        t_array.add(elem);
        Collections.sort(t_array);
    }

    T get_first()
    {
        if (t_array.size() == 0)
        {
            System.out.println("Ta lista nie ma elementów");
        }
        return t_array.get(0);
    }

    String tostring()
    {
        for (T t : t_array)
            System.out.println(t.toString());
        return null;
    }
}
