

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













