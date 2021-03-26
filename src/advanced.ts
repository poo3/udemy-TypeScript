interface Enginner {
  name: string;
  role: string;
}

interface Blogger {
  name: string;
  follower: number;
}

type EnginnerBlogger = Enginner & Blogger;

const Jorge: EnginnerBlogger = {
  name: "mac",
  role: "EnginnerBlogger",
  follower: 8080,
};

type StringNumber = string | number;
type BooleanNumber = boolean | number;

type MixType = StringNumber & BooleanNumber;

const MixType = 8080;

console.log(MixType);
console.log(Jorge.name);

function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase;
  }
  return;
}

type NomadWorker = Enginner | Blogger;
function descibeProfile(nomadWorker: NomadWorker) {
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

const Jack: Enginner = {
  name: "suparou",
  role: "programer",
};

descibeProfile(Jack);

class Dog {
  kind: "dog" = "dog";
  speak() {
    console.log("bow-wow!");
  }
}

class Bird {
  kind: "bird" = "bird";
  speak() {
    console.log("tweet-tweet");
  }
  fly() {
    console.log("flutter");
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
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

const input = document.getElementById("input") as HTMLInputElement;
input.value = "input value";
