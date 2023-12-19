Worker.prototype = Object.create(Person.prototype);
//  tworzy nowy obiekt, który ma prototyp ustawiony na prototyp obiektu Person, 
// zachowując niezależność od niego, więc przy zmianie czegoś w prototypie Person,
//  to nie wpłynie to na prototyp Worker, i odwrotnie

Worker.prototype = Person.prototype;
// oba konstruktory (Worker i Person) będą używać tego samego prototypu,
// więc miany wprowadzone w prototypie jednej klasy wpłyną na drugą

Worker.prototype = new Person();
// konstruktor Person tworzy nowy obiekt, który staje się prototypem Worker
//  jednak ten obiekt może posiadać dodatkowe właściwości, które nie powinny być 
// częścią prototypu Worker
// Ponadto, jeśli konstruktor Person przyjmuje argumenty, 
// to trzebaby przekazać je w new Person()
