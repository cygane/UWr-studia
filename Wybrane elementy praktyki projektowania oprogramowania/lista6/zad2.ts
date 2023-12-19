function fibrec (n: number){
    if (n == 0){
        return 0;
    }
    else if (n == 1){
        return 1;
    }
    else{
        return fib_rec(n - 1) + fib_rec(n - 2);
    }
}

function memoize(fn: Function){
    var cache: any = {}
    return function(n: number){
        if(n in cache){
            return cache[n];
        }
        else{
            var res = fn(n);
            cache[n] = res;
            return res;
        }
    }
}

var fib_rec = memoize(fibrec); 

console.time()
console.log("rekurencyjnie:")
console.log(fib_rec(9));
console.timeEnd()

