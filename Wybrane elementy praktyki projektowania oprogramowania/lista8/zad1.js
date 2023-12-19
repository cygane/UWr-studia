//NOTE: Multer will not process any form which is not multipart (multipart/form-data).
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Ustawienia Multera
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Katalog, gdzie będą przechowywane przesłane pliki
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Obsługa żądania POST z przesłanym plikiem
app.post('/upload', upload.single('fileInput'), (req, res) => {
  res.send('Plik przesłany pomyślnie!');
});

// Obsługa żądania GET - przekierowanie do pliku HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Obsługa statycznych plików (np. index.html)
app.use(express.static('public'));

// Start serwera
app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
