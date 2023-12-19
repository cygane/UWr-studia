function Foo() {
    // Prywatna funkcja Qux dostępna tylko wewnętrznie w Foo
    function Qux() {
      console.log('To jest funkcja prywatna Qux');
    }
  
    // Publiczna funkcja Bar
    this.Bar = function() {
      console.log('To jest funkcja publiczna Bar');
      // Wywołanie funkcji prywatnej Qux
      Qux();
    };
}
  
// dodanie metody do prototypu
Foo.prototype.Bar = function() {
    this.Qux();
};

// tworzenie instancji obiektu Foo
var foo1 = new Foo();
var foo2 = new Foo();

// wywołanie publicznej metody Bar na instancjach
foo1.Bar(); // "Qux"
foo2.Bar(); // "Qux"

// próba wywołania prywatnej funkcji Qux na instancjach
// foo1.Qux(); // TypeError: foo1.Qux is not a function