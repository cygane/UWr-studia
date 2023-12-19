const module1 = require('./zad1modul.js');
const Tree = module1;

var root = new Tree(1, new Tree(2, new Tree(3)), new Tree(4));

for (var e of root) {
    console.log(e);
}

let a = require('./zad1cykl_a');
a.work_a(5);