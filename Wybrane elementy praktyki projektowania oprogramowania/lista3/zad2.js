function map(a,f){
    res = [];
    for (let i = 0; i < a.length; i++){
        res.push(f(a[i]));
    }
    return res;
}

function forEach(a,f){
    for (let i = 0; i < a.length; i++){
        var pom = a[i];
        a[i] = f(pom);
    }
}

function filter(a,f){
    res = []
    for (let i = 0; i < a.length; i++){
        if (f(a[i])){
            res.push(a[i]);
        }
    }
    return res;
}

var a = [1,2,3,4];
// console.log(forEach( a, _ => { console.log( _ ); } ))
// [1,2,3,4]
// console.log(filter( a, _ => _ < 3 ))
// [1,2]
// console.log(map( a, _ => _ * 2 ))
// [2,4,6,8]