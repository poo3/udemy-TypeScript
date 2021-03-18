"use strict";
var Developer = /** @class */ (function () {
    function Developer(age, experience, initName) {
        this.age = age;
        this.experience = experience;
        if ((initName = "Noname")) {
            this.name = initName;
        }
    }
    Developer.prototype.greeting = function (message) {
        if (message === void 0) { message = "Hello!"; }
        console.log("message");
    };
    return Developer;
}());
