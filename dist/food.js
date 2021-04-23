"use strict";
var Food = /** @class */ (function () {
    function Food(element) {
        this.element = element;
        element.addEventListener("click", this.clickEventHandler.bind(this));
    }
    Food.prototype.clickEventHandler = function () {
        this.element.classList.toggle("food--active");
        var score = Score.getInstance();
        score.render();
    };
    return Food;
}());
