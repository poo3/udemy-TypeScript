"use strict";
var Person = /** @class */ (function () {
    function Person(initName) {
        this.name = initName;
    }
    Person.prototype.greeting = function () {
        console.log("Hello! My name is " + this.name);
    };
    return Person;
}());
var Bob = new Person("Bob");
console.log(Bob);
var anotherPerson = {
    name: 'James',
    greeting: Bob.greeting
};
anotherPerson.greeting();
