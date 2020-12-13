console.log('Lesson 18');


/*let person = {
    firstName: 'John',
    lastName: 'Smith'
};*/



/*let person = {
    name: 'John',
    age: 25,
     gender: 'male'
};
let person1 = {
    name: 'Bob',
    age: 30,
    gender: 'male'
};

let person2 = {
    name: 'Mary',
    age: 20,
    gender: 'female'
};
*/
/*let Person = {
    constructor(name, age, gender) {
        console.log(this);

        this.name = name;
        this.age = age;
        this.gender = gender;

        return this;
    },

    greet() {
        console.log(`Hi! ${this.name}`);
    }
};

let person = Object.create(Person).constructor('John', 25, 'male');
let person1 = Object.create(Person).constructor('Bob', 30, 'male');
let person2 = Object.create(Person).constructor('Mary', 20, 'female');
console.log(person);
person.greet();
console.log(person1);
console.log(person2);


let Developer = Object.create(Person);
console.log('Developer', Developer);

Developer.constructor = function (name, age, gender, skills) {
    console.log(this);

    Person.constructor.apply(this, arguments);

    this.skills = skills || [];

    return this;
};

Developer.develop = function() {
    console.log(`${this.name} real web developer`);
};

let developer = Object.create(Developer).constructor('Vlad', 25, 'male', ['html', 'css', 'js']);
console.log('developer', developer);*/



/*
let Person = function(name, age, gender){
    //console.log(this);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.greet = function() {
        console.log(`Hi! ${this.name}`);
    }
};

let functionality = {
    greet() {
        console.log(`Hi! ${this.name}`);
    },
    print() {
        console.log(`${this.name} ${this.age} ${this.gender}`);
    },
    personProp: 'Test prop',
};

Person.prototype = functionality;
let person = new Person('John', 25, 'male');
console.log('person', person);


let Developer = function (name, age, gender, skills) {
    Person.apply(this, arguments);
    this.skills = skills || [];
};

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;


Developer.develop = function() {
    console.log(`${this.name} real web developer`);
};

let developer = new Developer('Vlad', 25, 'male', ['html', 'css', 'js']);
console.log('developer', developer);
developer.greet();

developer.develop();*/



//Class
class Person {
    constructor (name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.personProp = 'Test prop';
        this.date = new Date();
    }
    greet() {
        return `Hi! ${this.name}`;
    }
    print() {
        return `${this.name} ${this.age} ${this.gender}`;
    }
}

let person = new Person('John', 25, 'male');
console.log('person', person);
person.greet();

class Developer extends Person {
    constructor(...args) {
        super(...args);
        console.log(...args);// ... spread
        this.skills = args[3] || [];
    }
    develop() {
        console.log(`${this.name} real web developer`);
    }
    greet() {
        let res = super.greet();
        console.log(res);
        return `${res}! You are real web develop`;
    }
}

let developer = new Developer('Vlad', 25, 'male', ['html', 'css', 'js']);
console.log('developer', developer);
developer.greet();

developer.develop();

developer.print();
console.log(developer.print());


console.log();
console.log();



















