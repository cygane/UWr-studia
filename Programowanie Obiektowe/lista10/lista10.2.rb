#Julia Cygan
#lista 10 zad 2

class Kolekcja
  def initialize
    @head = nil
    @tail = nil
    @size = 0
  end

  def add(value)
    elem = Elem.new(value)
    if @head.nil?
      @head = elem
      @tail = elem
    else
      @tail.next = elem
      elem.prev = @tail
      @tail = elem
    end
    @size += 1
  end

  def size
    @size
  end

  def get(i)
    if i < 0 || i >= size
      return nil
    end

    elem = @head
    j = 0
    while j < i
      elem = elem.next
      j += 1
    end
    elem.value
  end

  def bin_search(value)
    left = 0
    right = size - 1

    while left <= right
      mid = (left + right) / 2
      mid_value = get(mid)

      if value == mid_value
        return mid
      elsif value < mid_value
        right = mid - 1
      else
        left = mid + 1
      end
    end
    return nil
  end

  def inter_search(value)
  a = 0
  b = size - 1;
    while a <= b do
      p = a + (value - get(a))*(b - a) / (get(b) - get(a))
      if get(p) == value
        return p
      end
      if get(p) < value
        a = p + 1
      else
        b = p - 1
      end
    end
    
    return nil
  end

  class Elem
    def initialize(value)
      @next = nil
      @value = value
      @prev = nil
    end
    
    def prev
      @prev
    end
  
    def prev=(elem)
      @prev = elem
    end
    
    def value
      @value
    end
  
    def next
      @next
    end
  
    def next=(elem)
      @next = elem
    end
  end
end

puts "Test dodawania, size i get"
kolekcja = Kolekcja.new
puts 0 
puts kolekcja.size
kolekcja.add(1)
# kolekcja = [1]
puts 1
puts kolekcja.size
puts 1
puts kolekcja.get(0)
kolekcja.add(2)
# kolekcja = [1,2]
puts 2
puts kolekcja.size
puts 2
puts kolekcja.get(1)
puts kolekcja.get(-1)
puts kolekcja.get(2)
puts "Test wyszukiwania binarnego"
# kolekcja = [1,2,5,8]
kolekcja.add(5)
kolekcja.add(8)
puts kolekcja.bin_search(2)
puts kolekcja.bin_search(8)
puts "Test wyszukiwania interpolacyjnego"
# kolekcja = [1,2,5,8]
puts kolekcja.bin_search(2)
puts kolekcja.bin_search(8)