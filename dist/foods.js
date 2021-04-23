"use strict";
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
    Foods.getInstance = function () {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    };
    return Foods;
}());
