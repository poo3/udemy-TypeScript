function Logging(message: string) {
  return function (constructor: Function) {
    console.log("Logging...");
    console.log(message);
    console.log(constructor);
  };
}

@Logging("decolator factory")
class User {
  name = "Quill";
  constructor() {
    console.log("User was created!");
  }
}
