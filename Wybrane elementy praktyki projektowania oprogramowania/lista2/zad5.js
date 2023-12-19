const myObject = {
    // Pole
    name: 'Hello',
    
    // Metoda
    myMethod: function() {
      console.log(this.name)
    },
    
    // get
    get myProperty() {
      return this.name
    },
    
    // set
    set myProperty(value) {
      this.name = value
    }
}

const dodaj = {}
Object.defineProperty(dodaj, 'name', {
    value: 'Hello'
})

Object.defineProperty(dodaj, 'myMethod', {
    value: function() {
      console.log(this.name)
    }
})

Object.defineProperty(dodaj, 'myProperty', {
    get: function() {
      return this.name
    },
    set: function(value) {
      this.name = value
    }
})
dodaj.myMethod() // Wywołanie metody
console.log(dodaj.myProperty) // Wywołanie akcesora get
dodaj.myProperty = 'World' // Wywołanie akcesora set
console.log(dodaj.myProperty) // dlaczego nie działa?
// za pomocą Object.defineProperty możesz dodac właściwości z akcesorami get i set 
//do istniejących obiektów, jednak nie możesz użyć jej do dodawania nowych pól lub metod do obiektów