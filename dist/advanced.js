"use strict";
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
        return x.toUpperCase;
    }
    return;
}
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
    }
    Dog.prototype.speak = function () {
        console.log("bow-wow!");
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
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
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
