const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

// Ustawienie EJS jako silnika szablonów
app.set('view engine', 'ejs');

// Widok domyślny - formularz zgłoszenia
app.get('/', (req, res) => {
  res.render('form');
});

// Obsługa formularza zgłoszenia
app.post('/', (req, res) => {
  const { firstName, lastName, course, tasks } = req.body;

  // Sprawdzenie poprawności wprowadzonych danych
  if (!firstName || !lastName || !course) {
    res.send('Wypełnij wszystkie pola formularza.');
    return;
  }

  // Przekierowanie do widoku wydruku
  res.render('print', { firstName, lastName, course, tasks });
});

// Nasłuch na określonym porcie
app.listen(port, () => {
  console.log(`Aplikacja działa na http://localhost:${port}`);
});
