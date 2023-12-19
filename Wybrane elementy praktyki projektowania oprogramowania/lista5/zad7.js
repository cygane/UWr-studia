const fs = require('fs');
const util = require('util');

fs.readFile('lista5/text.txt', 'utf8', function(err, data) {
  if (err) {
    console.error('Błąd odczytu pliku:', err);
  } else {
    console.log(data);
  }
});

//ręcznie napisana
function read_promise( path, enc ) {
    return new Promise( (res, rej) => {
        fs.readFile( path, enc, (err, data) => {
            if ( err )
                rej(err);
            res(data);
        });
    })
}

read_promise('lista5/text.txt', 'utf-8')
    .then( data => {
        console.log( `data: ${data}` );
    })
    .catch( err => {
        console.log( `err: ${err}` );
    })


// fs.promises
fs.promises.readFile('lista5/text.txt','utf-8')
    .then(data => {
        console.log(data);
    })

// util.promisify
const readFileAsync = util.promisify(fs.readFile);

readFileAsync('lista5/text.txt', 'utf8')
  .then(data => {
    console.log(data);
  })
  

//po nowemu
async function main() {
    try {
        const a = await readFileAsync('lista5/text.txt', 'utf-8');
        console.log(a);
    }
    catch ( e ) {
        console.log(e);
    }
}