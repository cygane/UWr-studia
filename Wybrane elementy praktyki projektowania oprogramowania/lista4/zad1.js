function getLastProto(o) {
    var p = o;
    do {
        o = p;
        p = Object.getPrototypeOf(o);
    } while (p);
    return o;
}


var obj1 = {};
var obj2 = {};
var obj3 = {};

Object.setPrototypeOf(obj1, obj2);
Object.setPrototypeOf(obj2, obj3);

var lastProto1 = getLastProto(obj1);
var lastProto2 = getLastProto(obj2);
var lastProto3 = getLastProto(obj3);

console.log(lastProto1 === lastProto2); 
console.log(lastProto1 === lastProto3); 
console.log(lastProto2 === lastProto3); 

// Wszystkie obiekty wskazują na ten sam ostatni prototyp (Object.prototype)
