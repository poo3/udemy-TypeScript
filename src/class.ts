class Person {
  static species = 'Homo sapiens';
  static isAdult(age: number){
    if(age > 20){
      return 'Adult Person';
    }else{
      return 'Child Person';
    }
  }
  constructor(public name: string, protected age: number) {}

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old `);
  }
}

class Teacher extends Person {
  get subject(): string {
    if (!this._subject) {
      throw new Error("There is no subject");
    }
    return this._subject;
  }
  set subject(value) {
    if (!value) {
      throw new Error("There is no value");
    }
    this._subject = value;
  }
  constructor(name: string, age: number, public _subject: string) {
    super(name, age);
  }

  greeting(this: Teacher) {
    console.log(
      `Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`
    );
  }
}

console.log(Person.species);
console.log(Person.isAdult(30))
