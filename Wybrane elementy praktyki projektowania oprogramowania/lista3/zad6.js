function fib() {
    let a = 0;
    let b = 1;

    return {
        next: function() {
            const current = a;
            const next = a + b;
            a = b;
            b = next;

            return { 
                value: current, 
                done: false 
            }
        }
    }
}

// var _it = fib();
// for ( var _result; _result = _it.next(), !_result.done; ) {
//     console.log( _result.value );
// }

//dopisz generator z yield
function *fib(){
    let a = 0;
    let b = 1;
    while(true){
        const current = a;
        const next = a + b;
        a = b;
        b = next;
        yield current;
    }
}

// var _it = fib();
// for ( var _result; _result = _it.next(), !_result.done; ) {
//     console.log( _result.value );
// }
for ( var i of fib() ) {
    console.log( i );
} //dziala dla generatora z yield