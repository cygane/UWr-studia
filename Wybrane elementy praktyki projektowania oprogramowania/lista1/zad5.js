function fib_it(n){
    var a = 0;
    var b = 1;
    var c = 0;
    if (n == 1){
        console.log(a);
    }
    else if (n == 2){
        console.log(b);
    }
    else{
        for (let i = 2 ; i <= n; i++){
            c = a +b;
            a = b;
            b = c;
        }
        console.log(b);
    }
}

//fib_it(9);

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

for (let i = 10; i<= 40; i++){
    console.time()
    console.log("iteracyjnie:")
    console.log(fib_it(i));
    console.timeEnd()


    console.time()
    console.log("rekurencyjnie:")
    console.log(fib_rec(i));
    console.timeEnd()
}