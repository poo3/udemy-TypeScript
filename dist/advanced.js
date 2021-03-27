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
// const input = document.getElementById("input") as HTMLInputElement;
// input.value = "input value";
