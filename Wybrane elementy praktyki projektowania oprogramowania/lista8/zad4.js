const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Dodaj middleware cookieParser, aby móc łatwo obsługiwać ciasteczka
app.use(cookieParser());

app.get('/', (req, res) => {
  // Odczytaj ciasteczko o nazwie "mojeCiasteczko" z żądania
  const mojeCiasteczko = req.cookies.mojeCiasteczko;

  if (mojeCiasteczko) {
    // Jeśli ciasteczko istnieje, wyświetl jego wartość
    res.send(`Odczytano ciasteczko: ${mojeCiasteczko}`);
  } else {
    // Jeśli ciasteczko nie istnieje, dodaj nowe ciasteczko
    const nowaWartosc = 'Witaj, to moje ciasteczko!';
    res.cookie('mojeCiasteczko', nowaWartosc);

    res.send('Dodano nowe ciasteczko. Odśwież stronę, aby odczytać.');
  }
});

app.get('/usun-ciasteczko', (req, res) => {
  // Usuń ciasteczko o nazwie "mojeCiasteczko"
  res.clearCookie('mojeCiasteczko');
  res.send('Usunięto ciasteczko.');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});


// if (navigator.cookieEnabled) {
//     console.log('Przeglądarka obsługuje ciasteczka.');
//   } else {
//     console.log('Przeglądarka nie obsługuje ciasteczek.');
//   }
//sprawdzanie, czy przegladarka obsluguje ciastka