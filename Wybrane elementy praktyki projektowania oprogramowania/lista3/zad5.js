function createGenerator(m){
    return function() {
        var _state = 0;
        return {
            next : function() {
                return{
                    value : _state,
                    done : _state++ >= m
                }
            }
        }
    }
}

var foo1 = {
    [Symbol.iterator]: createGenerator(4)
};

var foo2 = {
    [Symbol.iterator]: createGenerator.bind(null, 10) // Ustawiamy limit na 8
};

for (var f of foo1) {
    console.log(f);
}

for (var f of foo2) {
    console.log(f);
}
