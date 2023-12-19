#Julia Cygan
#lista 10 zad 1

class Collection
  def initialize(items)
    @items = items
  end

  def swap(i, j)
    @items[i], @items[j] = @items[j], @items[i]
  end

  def length
    @items.length
  end

  def get(i)
    @items[i]
  end

  def items
    @items
  end
end

class Sorter
  def sort1(collection)
    quick_sort(collection, 0, collection.length - 1)
  end

  def sort2(collection)
    bubble_sort(collection, collection.length - 1)
  end

  private

  def quick_sort(collection, left, right)
    i = left
    j = right
    pivot = collection.get((left + right) / 2)
    begin
      while collection.get(i) < pivot do
        i = i + 1
      end

      while collection.get(j) > pivot do
        j = j - 1
      end

      if i <= j
        collection.swap(i, j)
        i = i + 1
        j = j - 1
      end
    end while i <= j

    if left < j
      quick_sort(collection, left, j)
    end

    if right > i
      quick_sort(collection, i, right)
    end
    collection  
  end
  
  def bubble_sort(collection, n)
    for i in 0 .. n-1 do
		  for j in 1 .. n-i-1 do 
		    if collection.get(j-1) > collection.get(j)
			   collection.swap(j-1, j)
        end
      end
    end
    collection
  end
end


collection = Collection.new([15, 3, 8, 0, 5, 2, 1, 2, 13, 10])
sorter = Sorter.new
puts sorter.sort1(collection).inspect
puts sorter.sort2(collection).inspect
