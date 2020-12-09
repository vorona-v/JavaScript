console.log('Sample JavaScript');

console.log(1 || 1);


var a = 0,
    b = 0,
    isTrue = true,
    isFalse = false;

isTrue && (a = 5);
console.log(a);

isFalse && (b = 5);
console.log(b);


var someString = 'Non-empty string',
    emptyString = '',

    newString1 = someString || 'Default string',
    newString2 = emptyString || 'Default string';

console.log(newString1);
console.log(newString2);



var person = {
    name: 'Jhon',
    age: 25,
    gender: 'male'
}
console.log(person.name);


var a = 10, b = 20;

a = b;
b = 15;
console.log(a);

a = 50;
console.log(a);
console.log(b);

var a = {x: 10}, b = {x: 20};
console.log(a.x);
console.log(b.x);

a = b;
console.log(a.x);
console.log(b.x);

b.x = 15;
console.log(a.x);
console.log(b.x);

a.x = 50;
console.log(a.x);
console.log(b.x);

var age = 60;
var msg = '';

if (age < 18 ) {
    msg = 'Ребенок';
} else if (age < 45) {
    msg = 'Молодежь';
} else {
    msg = 'Пожилой';
}
console.log(msg);


//условие ? выражение1 : выражение2
//age < 18 ? msg = 'ребенок' : msg = 'Взрослый';
//msg = age < 18 ? 'ребенок' : 'Взрослый';



msg = age < 18 ? 'ребенок' : 'Взрослый';

//
//age < 18 ? msg = 'ребенок' : //условие ? выражение1 : выражение2;
//age < 18 ? msg = 'ребенок' : age < 45 ? msg = 'ребенок' : msg = 'Пожилой';
msg = age < 18 ? 'ребенок' : age < 45 ? 'ребенок' : 'Пожилой';

console.log(msg);