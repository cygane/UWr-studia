#Julia Cygan
# lista 8 : zadanie 2

class Dlugosc
  def initialize(dl)
    @km = dl 
  end
  def milamorska
    1.8 * @km
  end
  def milamorska=(dl)
    @km = 1.8 * dl
  end 
end

class Czas
  def initialize(time)
    @h = time 
  end
  def sek
    3600 * @h
  end
  def sek=(time)
    @h = time / 3600
  end 
end

class Predkosc
  def initialize(speed)
    @m_s = speed
  end
  def km_h
    @m_s * 3.6
  end
  def wezel
    @m_s * 1.9
  end
end

class Przyspieszenie
  def initialize(fast)
    @m_s2 = fast
  end
  def km_s2
    @m_s2 / 1000
  end
  def mm_h2
    @m_s2 * 3600000
  end
end

puts "Prędkość:"
puts "SI (m/s)| Jednostki spoza SI (km/h)"
(10..25).step(5).each do |m_s|
  predkosc = Predkosc.new(m_s)
  km_na_h = predkosc.km_h.round(2)
  puts "#{m_s} m/s  |  #{km_na_h} km/h"
end


puts "\nPrzyspieszenie:"
puts "SI (m/s²)  | Jednostki spoza SI (km/s²)"
(1000..5000).step(1000).each do |m_s2|
  przyspieszenie = Przyspieszenie.new(m_s2)
  km_na_s2 = przyspieszenie.km_s2.round(2)
  mm_na_h2 = przyspieszenie.mm_h2.round(2)
  puts "#{m_s2} m/s²  |  #{km_na_s2} km/s²"
end
