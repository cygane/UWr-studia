var n = 1;
// liczba ma prototyp?
console.log( typeof Object.getPrototypeOf( n ) );
// można jej dopisać pole/funkcję?
n.foo = 'foo'; // new Numvber(n)..foo
console.log( n.foo );

var m = Number(n);
m.foo = 1;


// typeof Object.getPrototypeOf(n) zwróci wartość "object", 
// ponieważ wewnętrznie JavaScript próbuje znaleźć prototyp dla liczby, 
// ale liczby nie posiadają prototypu
//  liczby są typami prostymi i nie można im przypisywać dodatkowych właściwości
//  Ta próba nie spowoduje błędu, ale nie utworzy też pola foo w liczbie n
// Ostatnie console.log(n.foo) wyświetli undefined, 
// ponieważ n nadal jest tylko liczbą, a nie obiektem, i nie posiada ono pola foo.