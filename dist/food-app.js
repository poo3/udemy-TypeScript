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
        this._activeElements = [];
        this.elements.forEach(function (element) {
            new Food(element);
        });
    }
    Object.defineProperty(Foods.prototype, "activeElements", {
        get: function () {
            var _this = this;
            this._activeElements = [];
            this.elements.forEach(function (element) {
                if (element.classList.contains("food--active")) {
                    _this._activeElements.push(element);
                }
            });
            return this._activeElements;
        },
        enumerable: false,
        configurable: true
    });
    return Foods;
}());
var foods = new Foods();
