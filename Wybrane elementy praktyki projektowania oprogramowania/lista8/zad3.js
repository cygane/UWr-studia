const express = require('express');
const app = express();

app.get('/pobierz-plik', (req, res) => {
  // Tworzenie dynamicznego strumienia danych (na przykład z użyciem strumienia węzłowego)
  //const dynamicznyStrumien = tworzDynamicznyStrumien();

  // Ustawienie nagłówka Content-Disposition, aby przeglądarka zinterpretowała to jako plik do pobrania
  res.setHeader('Content-Disposition', 'attachment; filename=plik-do-pobrania.txt');

  // Ustawienie odpowiedniego Content-Type dla pliku (tu przykład dla zwykłego tekstu)
  res.setHeader('Content-Type', 'text/plain');

  // Przekazanie strumienia jako ciała odpowiedzi
  //dynamicznyStrumien.pipe(res);
  res.end("Ala ma kota")
});

// Funkcja do tworzenia dynamicznego strumienia danych (do dostosowania do własnych potrzeb)
function tworzDynamicznyStrumien() {
  const { Readable } = require('stream');
  const strumien = new Readable();

  // Logika generowania dynamicznych danych
  strumien.push('To są dynamicznie generowane dane.\n');
  strumien.push(null); // Koniec strumienia

  return strumien;
}

const port = 3000;
app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
