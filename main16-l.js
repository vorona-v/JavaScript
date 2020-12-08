console.log('!@#');

console.log();

var i = 100;
do {
    console.log(i++);
} while (i < 10);

var sayHello = function () {
    //console.log(arguments);
    var res =  arguments.length === 0 ? 'Hello unknown student' : 'Hello';
    for (var i = 0; i < arguments.length; i++) {
        res = res + ' ' + arguments[i];
    }

    return res;
};
console.log(sayHello('best', 'dear', 'students').toUpperCase());



//Callback
var func = function (callback) {
    var res = 1+ 2;

    setTimeout(function () {
        console.log('Timer finished');
        callback(res);
    }, 100)
};

var func2 = function (param) {
    console.log('Result: ', param);
};

func(func2);


function mySandwich (param1, param2, callback) {
    alert('Начинаем есть бутерброд.\n\n\
    Параметры: ' + param1 + ', ' + param2);

    callback();
}
mySandwich('ветчина', 'сыр', function() {
    alert('Заканчиваем есть бутерброд.');
});


function someFunction (arg1, arg2, callback) {
// переменная, генерирующая случайное число в интервале между arg1 и arg2
    var myNumber = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
// теперь всё готово и мы вызываем callback, куда передаем наш результат
    callback(myNumber);
}
// вызываем функцию
someFunction(5, 15, function (num) {
// эта анонимная функция выполнится при вызове callback() в основной функции
    console.log('callback called! ' + num);
});



var func = (function (param1) {
    console.log('param1 <=', param1)
    return function (param2) {
        console.log('param2 <=', param2)
        console.log('inner ')
    }
}('test1'));

func('test2');












