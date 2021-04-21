"use strict";
var Score = /** @class */ (function () {
    function Score() {
    }
    Object.defineProperty(Score.prototype, "totalScore", {
        get: function () {
            var foods = new Foods();
            return foods.activeElementsScore.reduce(function (total, score) { return total + score; }, 0);
        },
        enumerable: false,
        configurable: true
    });
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
        this._activeElementsScore = [];
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
    Object.defineProperty(Foods.prototype, "activeElementsScore", {
        get: function () {
            var _this = this;
            this._activeElementsScore = [];
            this.activeElements.forEach(function (element) {
                var foodScore = element.querySelector(".food__score");
                if (foodScore) {
                    _this._activeElementsScore.push(Number(foodScore.textContent));
                }
            });
            return this._activeElementsScore;
        },
        enumerable: false,
        configurable: true
    });
    return Foods;
}());
var foods = new Foods();
