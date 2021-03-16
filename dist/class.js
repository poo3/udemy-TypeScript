"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.isAdult = function (age) {
        if (age > 20) {
            return "Adult Person";
        }
        else {
            return "Child Person";
        }
    };
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        console.log("Hello! My name is " + this.name + ". I am " + this.age + " years old ");
        this.explainJob();
    };
    Person.species = "Homo sapiens";
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, _subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = _subject;
        return _this;
    }
    Teacher.prototype.explainJob = function () {
        console.log("My job is " + this._subject + "!!");
    };
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            if (!this._subject) {
                throw new Error("There is no subject");
            }
            return this._subject;
        },
        set: function (value) {
            if (!value) {
                throw new Error("There is no value");
            }
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    return Teacher;
}(Person));
console.log(Person.species);
console.log(Person.isAdult(30));
var Washizawa = new Teacher("Washizawa", 33, "science");
Washizawa.greeting();
