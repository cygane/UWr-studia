
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.render('index', {

    radioParams: {
      name: 'radioExample',
      label: 'Radio Option',
      options: [
        { value: 'radioOption1', label: 'Radio Option 1' },
        { value: 'radioOption2', label: 'Radio Option 2' },
        { value: 'radioOption3', label: 'Radio Option 3' },
      ],
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
