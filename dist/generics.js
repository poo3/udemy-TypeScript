"use strict";
function copy(value, key) {
    return value;
}
console.log(copy({ name: "Jorge", age: 33 }, "age"));
var LightDataBase = /** @class */ (function () {
    function LightDataBase() {
        this.data = [];
    }
    LightDataBase.prototype.add = function (item) {
        this.data.push(item);
    };
    LightDataBase.prototype.remove = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    LightDataBase.prototype.get = function () {
        return this.data;
    };
    return LightDataBase;
}());
var stringLightDataBase = new LightDataBase();
stringLightDataBase.add("string");
console.log(stringLightDataBase.get());
stringLightDataBase.remove("string");
stringLightDataBase.add("newItem");
stringLightDataBase.add("secondItem");
console.log(stringLightDataBase.get());
var tmp2;
