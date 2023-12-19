#Julia Cygan
# lista 8 : zadanie 4

class Jawna
  def initialize(tekst)
    @tekst = tekst
  end
  
  def zaszyfruj(key)
    res = ""
    @tekst.each_char do |c|
      if key.has_key?(c)
        res += key[c]
      else
        res += c
      end
    end
    Zaszyfrowana.new(res)
  end
  
  def to_s
    @tekst
  end
end

class Zaszyfrowana
  def initialize(tekst)
    @tekst = tekst
  end
  
  def to_s
    @tekst
  end
  
  def odszyfruj(key)
    res = ''
    @tekst.each_char do |c|
      if key.has_value?(c)
        res += key.key(c)
      else
        res += c
      end
    end
    Jawna.new(res)
  end
end

key = {'a' => 'b', 'b' => 'r', 'r' => 'y', 'y' => 'u', 'u' => 'a'}
napis = Jawna.new('ruby')
zaszyfrowany = napis.zaszyfruj(key)
puts "Zaszyfrowany napis ruby:" 
puts zaszyfrowany 
odszyfrowane = zaszyfrowany.odszyfruj(key)
puts "Odszyfrowany napis yaru:"
puts odszyfrowane