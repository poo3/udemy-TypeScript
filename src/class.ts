class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }

  greeting(this: {name: string}){
    console.log(`Hello! My name is ${this.name}`);
  }
}

const Bob = new Person("Bob");
console.log(Bob);

const anotherPerson = {
  name: 'James',
  anotherGreeting: Bob.greeting
}
anotherPerson.anotherGreeting();