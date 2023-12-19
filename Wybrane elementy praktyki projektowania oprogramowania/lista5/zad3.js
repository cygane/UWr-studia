const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const losuj = () => Math.floor(Math.random() * 101);

const wylosowana = losuj();

const graj = () => {
    rl.question('Zgadnij liczbę od 0 do 100: ', (odpowiedz) => {
      const podanaLiczba = parseInt(odpowiedz);
  
      if (isNaN(podanaLiczba)) {
        console.log('To nie jest liczba.');
        graj();
      } else if (podanaLiczba === wylosowana) {
        console.log('To jest właśnie ta liczba!');
        rl.close();
      } else if (podanaLiczba < wylosowana) {
        console.log('Moja liczba jest większa.');
        graj();
      } else {
        console.log('Moja liczba jest mniejsza.');
        graj();
      }
    });
};

graj();