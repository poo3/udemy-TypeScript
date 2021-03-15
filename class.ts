class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
}

const person = new Person("Bob");
console.log(person);
