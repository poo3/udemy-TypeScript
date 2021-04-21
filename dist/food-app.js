"use strict";
var Score = /** @class */ (function () {
    function Score() {
    }
    return Score;
}());
var Food = /** @class */ (function () {
    function Food(element) {
        this.element = element;
        element.addEventListener("click", this.clickEventHandler.bind(this));
    }
    Food.prototype.clickEventHandler = function () {
        this.element.classList.toggle("food--active");
    };
    return Food;
}());
var Foods = /** @class */ (function () {
    function Foods() {
        this.elements = document.querySelectorAll(".food");
        this.elements.forEach(function (element) {
            new Food(element);
        });
    }
    return Foods;
}());
var foods = new Foods();
