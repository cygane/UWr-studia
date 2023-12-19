const fs = require('fs');

fs.readFile('lista5/text.txt', 'utf-8', function(erra, dataa) {
    if (erra){
        console.error('Błąd odczytu pliku:',erra);
    }
    else {
        console.log(dataa);
    }
});