"use strict";
var _a, _b, _c;
var Jorge = {
    name: "mac",
    role: "EnginnerBlogger",
    follower: 8080,
};
var MixType = 8080;
console.log(MixType);
console.log(Jorge.name);
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return x;
}
console.log(toUpperCase("poo3"));
function descibeProfile(nomadWorker) {
    if ("role" in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ("follower" in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
var Jack = {
    name: "suparou",
    role: "programer",
};
descibeProfile(Jack);
var Dog = /** @class */ (function () {
    function Dog() {
        this.kind = "dog";
    }
    Dog.prototype.speak = function () {
        console.log("bow-wow!");
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.kind = "bird";
    }
    Bird.prototype.speak = function () {
        console.log("tweet-tweet");
    };
    Bird.prototype.fly = function () {
        console.log("flutter");
    };
    return Bird;
}());
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case "bird":
            pet.fly();
    }
    // if (pet instanceof Bird) {
    //   pet.fly();
    // }
}
havePet(new Bird());
var downloadData = {
    id: 3,
};
console.log((_b = (_a = downloadData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
var userData = (_c = downloadData.user) !== null && _c !== void 0 ? _c : "no-user";
console.log(userData);
var intersectionFunc;
intersectionFunc = function (a, b) {
    return 0;
};
// レストパラメータにタプルや配列を指定する
function restFunc() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
restFunc(1, "string", true, 1, 2, 85, 3, 54, 6, 2, 468, 68, 45, 465, 45, 3, 513);
var number = [8, 88];
var Jane = {
    name: "jane",
    age: 32,
};
