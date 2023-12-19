var http = require('https');

const pobierzZawartosc = function(url)  {
    return new Promise((resolve, reject) => {
      http.get(url, (response) => {
        let zawartosc = '';
  
        response.on('data', (chunk) => {
          zawartosc += chunk;
        });
  
        response.on('end', () => {
          resolve(zawartosc);
        });
  

        response.on('error', (err) => {
          reject(err);
        });
      
    });
    });
};

pobierzZawartosc('https://ii.uni.wroc.pl')
  .then((zawartosc) => {
    console.log('Zawartość strony:', zawartosc);
  })
  .catch((err) => {
    console.error('Błąd pobierania zawartości:', err);
});