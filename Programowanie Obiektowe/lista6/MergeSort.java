public class MergeSort<T extends Comparable<T>>
{
   private T[] array;

    MergeSort(T[] array)
    {
        this.array = array;
    }

    public void sort() {
        Sort(0, array.length - 1);
    }

    private void Sort(int begin,int end)
    {
        if(begin < end) {
            int avg = (begin + end) / 2;

            Thread t_left = new Thread(new Runnable() {
                @Override
                public void run() {
                    Sort(begin,avg);
                }
            });

            Thread t_right = new Thread(new Runnable() {
                @Override
                public void run() {
                    Sort(avg + 1, end);
                }
            });

            t_left.start();
            t_right.start();

            try {
                t_left.join();
                t_right.join();

                Merge(begin, avg, end);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public void Merge(int begin, int avg, int end)
    {
        int i = begin;
        int j = avg + 1;
        int k = 0;

        T[] tmp = (T[]) new Comparable[end - begin + 1];

        while (i <= avg && j <= end) {
            if (array[i].compareTo(array[j]) < 0) {
                tmp[k++] = array[i++];
            } else {
                tmp[k++] = array[j++];
            }
        }

        while (i <= avg) {
            tmp[k++] = array[i++];
        }

        while (j <= end) {
            tmp[k++] = array[j++];
        }


        for (int x = 0; x < tmp.length; x++) {
            array[begin + x] = tmp[x];
        }
    }

    public void wypisz()
    {
        for(int i=0 ;i< array.length;i++)
        {
            System.out.println(array[i]);
        }
    }

}
