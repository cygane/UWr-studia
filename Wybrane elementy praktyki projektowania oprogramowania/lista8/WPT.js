// Zagrożenie Web Parameter Tampering polega na modyfikowaniu parametrów 
// przesyłanych do aplikacji, co może prowadzić do nieprawidłowego zachowania,
// nieautoryzowanego dostępu lub manipulacji danych. 
// Przeciwdziałanie: 

// Szyfrowanie : Polega na zastosowaniu algorytmu szyfrowania
// do parametrów przesyłanych w query string. Dzięki temu nawet gdy atakujący 
// zmieni wartości, nie będzie w stanie ich odczytać.

// Podpisywanie: Polega na dołączaniu do query string dodatkowej wartości, 
// będącej podpisem (np. HMAC) zawartości parametrów. Serwer może sprawdzić, 
// czy podpis zgadza się z zawartością parametrów.

// Dodatkowa walidacja: Polega na przeprowadzaniu dodatkowej walidacji 
// parametrów po stronie serwera, aby sprawdzić, czy są one zgodne z 
// oczekiwanymi wartościami i czy nie zostały zmienione.
var http = require('http');
var express = require('express');
var crypto = require('crypto');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.end("default page");
});

app.get("/faktura/:id", (req, res) => {
  res.end(`dynamicznie generowana faktura: ${req.params.id}`);
});

// Endpoint generujący podpis HMAC
app.get("/generate-hmac", (req, res) => {
  /* tajny klucz, znany tylko na serwerze */
  var secret = 'this is a secret';
  /* parametr który zobaczy użytkownik */
  var parameter = '1448219';
  /* podpis który też zobaczy użytkownik */
  var hmac = crypto
    .createHmac('sha256', secret)
    .update(parameter)
    .digest('hex');
  
  console.log(hmac);
  res.end(`Wygenerowany HMAC: ${hmac}`);
});

// Obsługa błędów 404
app.use((req, res, next) => {
  res.render('404.ejs', { url: req.url });
});

// Utworzenie serwera HTTP
http.createServer(app).listen(3000, () => {
  console.log('Serwer działa na http://localhost:3000');
});
