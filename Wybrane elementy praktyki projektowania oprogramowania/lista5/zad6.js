const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('logs.txt')
});

const dict = {};

rl.on('line', (line) => {
    const parts = line.split(' ');
    if(dict[parts[1]] == undefined) dict[parts[1]] = 1;
    else dict[parts[1]]++;
})
rl.on('close', () => {
    const top3 = Object.entries(dict)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

    top3.forEach(([ip, count]) => {
    console.log(`${ip} ${count}`);
    });
})
