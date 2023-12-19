function map<before,f>( a: before[], f: (t: before) => f ): f[]{
    var res:f[] = [];
    for (let i = 0; i < a.length; i++){
        res.push(f(a[i]));
    }
    return res;
}

function forEach<T>( a: T[], f: (t: T) => T ): void{
    for (let i = 0; i < a.length; i++){
        a[i] = f(a[i]);
    }
}

function filter<T>( a: T[], f: (t: T) => boolean ): T[]{
    var res: T[] = [];
    for (let i = 0; i < a.length; i++){
        if (f(a[i])){
            res.push(a[i]);
        }
    }
    return res;
}

var a = [1,2,3,4];
console.log(filter( a, _ => _ < 3 ))
// [1,2]
console.log(map( a, _ => _ * 2 ))
// [2,4,6,8]
const squareFn = (x: number): number => x * x;
forEach(a, squareFn);
console.log(a);
// [1,4,9,16]