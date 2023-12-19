function fib_rec(n){
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

function memoize(fn){
    var cache = {}
    return function(n){
        if(n in cache){
            return cache[n]
        }
        else{
            var res = fn(n);
            cache[n] = res;
            return res;
        }
    }
}

var fib_rec = memoize(fib_rec); // wszystkie wywolania rekurencyjne sie memoizuja

console.time()
console.log("rekurencyjnie:")
console.log(fib_rec(9));
console.timeEnd()

console.time()
console.log("memoizacja:")
console.log(memofib(9));
console.timeEnd()