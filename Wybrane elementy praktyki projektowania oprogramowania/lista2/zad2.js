//pierwsza kropka
const kot = {
    imie : 'puszek',
    kolor : 'czarno-bialy'
}

console.log(kot.imie) // uzywa stalego identyfikatora
console.log(kot['kolor']) // dynamiczne wybieranie za pomoca zmiennych

//druga kropka
const imiona = {
    0 : 'Julia',
    1 : 'Małgorzata',
    2 : 'Jadwiga'
}
console.log(imiona[2]) // jako ciąg znaków, bo
// klucze w obiektach są przechwowywane jako ciągi znaków

const samochodzik = {
    firma: 'Toyota',
    model: 'Yaris'
  }
  
const klucz = 'firma'
console.log(samochodzik[klucz]) // klucz jako inny obiekt
//programista ma wpływ na klucz w obu przypadkach

//trzecia kropka
const owocki = ['winogrona', 'jablko', 'gruszka']
console.log(owocki['1']) // '1' jest traktowane jak ciag znakow

const indeks = {}
console.log(owocki[indeks]) // obiekt zostaje przeksztalcony na ciag znakow

console.log(owocki.length)
owocki.kolor = 'zolty' //kolor nie jest traktowany jako element tablicy, dlugosc niezmieniona
console.log(owocki.length)
console.log(owocki) 

const fruits = ['apple', 'banana', 'cherry']
fruits.length = 2
console.log(fruits) // dlugosc ustawiona na mniejsza, tablica jest przycinana
fruits.length = 4
console.log(fruits) // dlugosc ustawiana na wieksza, tablica jest 
//powiekszana o puste elementy


