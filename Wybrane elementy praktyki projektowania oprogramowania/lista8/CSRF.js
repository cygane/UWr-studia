// Atakujący rejestruje konto, podając w swoim loginie tag: 
// <img src=”http://pro-forum.sekurak/admin/addUser?login=malgorzata4&pass=
// 1234&type=adm”>
// Możliwe są tu również inne sposoby ataku (tag <img> to tylko przykład).
// Administrator loguje się oraz wchodzi na stronę z akceptowaniem nowych kont.
// Podczas próby pobrania obrazu z tagu <img>, przeglądarka administratora 
// realizuje automatycznie request do panelu administracyjnego (mamy tu CSRF) 
// – i tym samym tworzy nowe konto w systemie o uprawnieniach administracyjnym.
// Aby atakujący mógł się zalogować wystarczyłoby jeszcze raz wykorzystać CSRF 
// do wykonania np. requestu usuwającego blokadę na IP użytkownika.

//zagrozenia dla prostych aplikacji:
//CSRF, XSS, WPT, Cookie Tampering


// Zagrożenie: CSRF polega na wykonaniu nieautoryzowanych działań w imieniu użytkownika,
// wykorzystując fakt, że użytkownik jest zalogowany na danej stronie.
// Przeciwdziałanie:Token CSRF: dzięki temu serwer sprawdza, czy token przez niego wygenerowany
// zgadza się z tym, który przysyła uzytkownik. Middleware takie jak csurf w Express pomaga 
// w generowaniu i weryfikacji tokenów CSRF.
const express = require('express');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(csrf({ cookie: true }));

app.get('/', (req, res) => {
  // Generowanie tokenu CSRF
  const csrfToken = req.csrfToken();
  res.cookie('XSRF-TOKEN', csrfToken); // Zapis tokenu w ciasteczku

  // Renderowanie formularza z tokenem CSRF
  res.send(`
    <form action="/przetworz" method="post">
      <input type="hidden" name="_csrf" value="${csrfToken}">
      <button type="submit">Przetwórz</button>
    </form>
  `);
});

app.post('/przetworz', (req, res) => {
  // Weryfikacja tokenu CSRF
  if (req.cookies['XSRF-TOKEN'] === req.body._csrf) {
    res.send('Zapytanie zabezpieczone przed CSRF zostało przetworzone.');
  } else {
    res.status(403).send('Błąd CSRF: Nieprawidłowy token.');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
