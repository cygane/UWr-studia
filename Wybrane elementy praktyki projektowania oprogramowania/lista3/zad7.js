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

function* take(it,top){
    for(let i = 0; i < top; i++){
        yield it.next().value
    }
}

for (let num of take( fib(), 10 ) ) {
    console.log(num);
}