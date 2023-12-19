function sum(x,y,z,...args){
    var suma = 0;
    for (let i = 0; i < args.length; i++) {
        suma += args[i];
    }
    return suma;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5));