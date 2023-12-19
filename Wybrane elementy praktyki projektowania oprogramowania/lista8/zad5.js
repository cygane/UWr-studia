const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();

app.use(
  session({
    store: new FileStore({
      path: './sessions', // Katalog, w którym będą przechowywane pliki sesji
    }),
    secret: 'super-tajny-sekret', // Sekret do szyfrowania danych sesji
    resave: false,
    saveUninitialized: true,
  })
);

app.get('/', (req, res) => {
  // Zapisz wartość w sesji
  req.session.exampleKey = 'Przykładowa Wartość';

  res.send('Wartość została zapisana w sesji. Otwórz /odczytaj aby odczytać.');
});

app.get('/odczytaj', (req, res) => {
  // Odczytaj wartość z sesji
  const storedValue = req.session.exampleKey 
  if (storedValue) {
    res.send(`Odczytana wartość z sesji: ${storedValue}`);
  } else {
    res.send('Brak wartości w sesji.');
  }
});

app.get('/usun', (req, res) => {
  // Usuń sesję (wyloguj użytkownika)
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    } else {
      res.send('Sesja została usunięta (użytkownik wylogowany).');
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
