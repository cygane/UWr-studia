var p = {
    name: 'jan'
}
var q = {
    surname: 'kowalski'
}

Object.setPrototypeOf(p, q);
console.log(p.name);
console.log(p.surname);

function ownproperty(obj,name){
    return obj.hasOwnProperty(name)
}

console.log(ownproperty(p, 'name')); 
console.log(ownproperty(p, 'surname'));

// funkcje w obiekcie
for (var propName in p) {
    if (p.hasOwnProperty(propName)) {
      console.log('Własność obiektu:', propName);
    }
}

// funkcje w obiekcie i lancuch prototypow

function propertyorprototype(obj,name){
    return obj.hasOwnProperty(name) || (name in obj);
}

for (var propName in p) {
    if (propertyorprototype(p, propName)) {
      console.log('Własność obiektu lub prototypu:', propName);
    }
  }