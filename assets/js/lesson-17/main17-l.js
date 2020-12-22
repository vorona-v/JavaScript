

var a = 5;

console.log(a);

var func1 = function () {

    a = 10;

    function inner () {
        console.log('inner');
    }

    console.log(a);

    inner ();
};

func1(); // 10

console.log(a); //5



var i = 5;
var func4 = function () {
    i = 10;
    console.log(i); // 10

    var innerFunc = function () {
        i = 15;
        console.log(i); // 15
    }
    innerFunc();
    console.log(i); // 15
};

func4();
console.log(i); //5



//var i = 5;
//console.log(i);

//var i;
//console.log(i);
//i = 5;


var func3 = function () {
    console.log('func worcs');
}
func3();




var counter = (function () {
    var count = 0;

    return function (param) {
        if (param !== undefined) count = param;

        return count++;
    }
}());

console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


function urlGenerator(domain) {
    console.log();

    return function (url) {
        //return 'https://' + url + '.' + domain;

        return `https://${url}.${domain}`;
    }
}
var comUrl = urlGenerator('com');
var uaUrl = urlGenerator('ua');

console.log(urlGenerator ('com')('mysite'));

console.log(comUrl ('google'));
console.log(uaUrl ('meta'));





function makeArmy() {
    var shooters = [];

    for (let i = 0; i < 10; i++) {
        var shooter = function() { // функция-стрелок
            console.log( i ); // выводит свой номер
        };
        shooters.push(shooter);
        console.log(shooters); // продемонстрирует, как массив заполняется функциями, необходимо для понимания
    }

    return shooters;
}

var army = makeArmy();

army[0]();
army[5]();
army[7]();



let etalon = 'etalon string';
etalon = 'new string';
console.log(etalon);

const etalon2 = 'etalon string';
//etalon = 'new string';
console.log(etalon2);



console.log('Lesson 18');

let washNextItem = function (itemsLeft) {
    itemsLeft--;
    console.log('В раковине осталось ' + itemsLeft + ' предметов');
    if (itemsLeft > 0) {
        washNextItem(itemsLeft);
    }
};

/*
washNextItem(10);

let washNextItem = function (itemsLeft) {
    while (itemsLeft--) {
        console.log('В раковине осталось ' + itemsLeft + ' предметов');
    }
};
washNextItem(10);*/


//Исключения
//throw 'my custom error';

/*let myError = new Error('My Error Message');
console.log(myError.message);
throw myError;*/


/*let calculate1 = function (n) {
    if (n < 70 || n > 122) {
        throw new Error('Возраст не может быть меньше 70 лет или больше 122');
    }
    return n;
};
calculate1(70);
console.log(calculate1(70));*/



/*let calculate = function (n) {
    if (n < 70 || n > 122) {
        throw new Error('Возраст не может быть меньше 70 лет или больше 122');
    }
    return n;
};

try {
    console.log(calculate(180));
} catch (err) {
    console.log(err);
} finally {
    console.log('finally code');
}

console.log('code work');
calculate(71);*/


/*const myError = new Error('My random error');

let func = function () {
    try {
        let a = 'block "try" works';

        if (Math.random() > 0.5) throw myError;

        console.log(a);
        return a;

    } catch (err) {
        console.log(err);
    } finally {
        let b = 'Block "finally" works';
        console.log(b);
    }
    console.log('Block at the end of the function');
    return 'Error happened';
};

func();*/


/*function calc(a, b) {
    let res = a + b;

    return res;
}
console.log(calc(2, 3));
*/

/*
const calc = (a, b) => a + b;
console.log(calc(2, 3));
*/

/*
const calc = (a) => a + 'Просто вернули число';
console.log(calc(2));
*/

/*
'use strict';
var i = 10;
var i = 20;
console.log(i);
*/
/*
const greet = function () {
    console.log(this);
    return `Hi! My name is ${this.name}`;
};

let person = {
    name: 'John',
    greet
};
let person1 = {
    name: 'Bob',
    greet
};
let person2 = {
    name: 'Mary',
    greet
};
console.log(person.greet());
console.log(person1.greet());
console.log(person2.greet());

greet();*/


let greet = function (greeting, divider) {
    /*setTimeout(() => {
        console.log(this);
        return `Hi! My name is ${this.name}`;
    }, 1000);*/

    /*let that = this;
    setTimeout( function () {
        console.log(that);
        return `Hi! My name is ${that.name}`;
    }, 1000);*/

    console.log(this);
    return `${greeting}${divider} My name is ${this.name}`;
};

/*let person = {
    name: 'John',
    greet
};
let person1 = {
    name: 'Bob',
    greet
};
let person2 = {
    name: 'Mary',
    greet
};
console.log(person.greet('Hi', '!'));
console.log(person1.greet.call(person, 'Hello', ':)'));
console.log(person2.greet.apply(person, ['Hi', '...']));*/


/*
let personCreet = greet.bind(person);

console.log(personCreet('Hi', '!'));
console.log(personCreet.call(person1, 'Hello', ':)'));
console.log(personCreet.call(person2, 'Hello', ':)'));*/




let pow = Math.pow.bind(null);
let pow2inArg = Math.pow.bind(null, 2);

console.log(pow(2,3));
console.log(pow2inArg(6));

/*for (let  i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 100);
}*/

/*for (var i = 0; i < 10; i++) {
    setTimeout((function (i) {
        console.log(i);
    }).bind(null, i), i * 100);
}*/



let person = {
    name: 'Jhon',
    _age: 20,
    get age() {
        return this._age23232323;
    },
    set age(value) {
        this._age23232323 = value < 0 ? 0 : value > 122 ? 122 : value;
    },
    gender: 'male',
};
console.log(person);

/*

Object.getOwnPropertyDescriptor(person, 'name');
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
console.log(Object.getOwnPropertyDescriptor(person, 'age'));
console.log(Object.getOwnPropertyDescriptor(person, 'male'));
*/



Object.defineProperty(person, '_age23232323', {
    value: 25,
    writable: false,
    enumerable: false,
    configurable: false,
});
person.age = 11130;
console.log(person.age);
for (key in person) {
    console.log(key, ':', person[key])
}

person._age = 11130;
console.log(person.age);
console.log(Object.getOwnPropertyDescriptor(person, '_age'));


person._age = 11130;
console.log(person.age);



Object.defineProperty(person, 'gender', {
    value: 'male',
    writable: false,
    enumerable: true,
    configurable: false,
});

for (key in person) {
    console.log(key, ':', person[key])
}
console.log(person.gender);
person.gender = 'female';
console.log(person.gender);




//Map ключ:значение

let map = new Map();
map.set('1', 'str1'); // ключ-строка
map.set(1, 'num1'); // число
map.set(true, 'bool1');


let recipeMap = new Map([
    ['огурцов',   '500 гр'],
    ['помидоров', '350 гр'],
    ['сметаны',   '50 гр']
]);

recipeMap.forEach( (value, key, map) => {
    console.log((`${key}: ${value}`)); // огурцов: 500 гр, и т.д.
});


let arr = [1,2,3,4,5]
for (let i of arr) {
    console.log(i);
}

arr.forEach((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
});

//arr.forEach((v) => console.log());




