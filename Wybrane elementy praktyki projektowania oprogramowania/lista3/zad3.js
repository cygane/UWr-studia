function createFs(n) { // tworzy tablicę n funkcji
    var fs = []; // i-ta funkcja z tablicy ma zwrócić i
    for ( let i=0; i<n; i++ ) {
        fs[i] =
            function() {
                return i; 
            };
        };
    return fs; 
}
var myfs = createFs(10);
console.log( myfs[0]() ); // zerowa funkcja miała zwrócić 0
console.log( myfs[2]() ); // druga miała zwrócić 2
console.log( myfs[7]() );
// 10 10 10               // ale wszystkie zwracają 10!?
//var, które nie tworzy bloku związania domknięcia (closure).
//Wszystkie funkcje używają zmiennej i z domknięcia, a w momencie,
//gdy te funkcje są wywoływane, zmienna i ma wartość 10 (wartość końcową pętli).
function createFs2(n) { 
    var fs = []; 
    for ( let i=0; i<n; i++ ) {
        fs[i] = function(ind) { //funkcja samowywołująca się
                return function(){
                    return ind;
                } ;
            }(i);
        };
    return fs; 
} //każda funkcja ma dostęp do własnego, unikalnego kontekstu i zwraca oczekiwane wartośc
var myfs2 = createFs2(10);
console.log( myfs2[0]() ); 
console.log( myfs2[2]() ); 
console.log( myfs2[7]() );