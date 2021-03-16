class Person {
  constructor(public name: string,private age: number) {}

  incrementAge(){
    this.age += 1;
  }

  greeting(this: Person){
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old `);
  }
}

const Bob = new Person("Bob",24);
console.log(Bob);
