//zad3
console.log( (![]+[])[+[]]+(![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]] );
// ![] = 'false'
// +[] = '0'
// (![]+[]) = false
// (![]+[])[+[]] = 'f', bo '0' jest jako indeks
// +!+[] = '+true' = '1'
// (![]+[])[+!+[]] = 'a', bo '1' jest jako indeks
// [![]] = ['false']
// [[]] = [[]]
// [][[]] = undefined
// ([![]]+[][[]]) = 'falseundefined'
// +!+[]+[+[]] = '1' + '0' = '10'
// ([![]]+[][[]])[+!+[]+[+[]]] = 'i', przez indeks
// !+[]+!+[] = true + true = 2
// (![]+[])[!+[]+!+[]] = 'l'
// 'fail'

//zad4
// typeof zwraca ciąg znaków wskazujący typ wartości operandu
//instanceof sprawdza, czy właściwość prototype konstruktora pojawia się gdziekolwiek 
//w łańcuchu prototypów obiektu, zwraca true lub false