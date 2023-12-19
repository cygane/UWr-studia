# Julia Cygan
# lista 9 zadanie 1

class Function
  def initialize(&block)
    @func = block
  end
  
  def value(x)
    @func.call(x)
  end
  
  def zero(a, b, e)
    x1 = a
    x2 = b
    while (x2 - x1).abs > e
      mid = (x1 + x2) / 2.0
      if value(mid).abs < e
        return mid
      elsif value(mid) * value(x1) < 0
        x2 = mid
      else
        x1 = mid
      end
    end
    nil
  end
  
  def field(a, b)
    n = 3.0
    x = (b - a) / n 
    s = 0.0
    mid = a + (b - a) / (2.0 * n)
   
    for i in 0 .. 2 do
      s = s + value(mid) 
        mid += x
    end
    return s * x
  end
    
    def deriv(x)
      h = 0.0001
      (value(x + h) - value(x - h)) / (2 * h)
    end
end

f = Function.new { |x| x*x }
puts f.value(2)  
puts f.zero(-5, 5, 0.001)  
puts f.field(0, 5)  
puts f.deriv(2)  