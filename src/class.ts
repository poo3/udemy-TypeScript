abstract class Person {
  static species = "Homo sapiens";
  static isAdult(age: number) {
    if (age > 20) {
      return "Adult Person";
    } else {
      return "Child Person";
    }
  }
  constructor(public name: string, protected age: number) {}

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old `);
    this.explainJob();
  }

  abstract explainJob(): void;
}

class Teacher extends Person {
  private static instance: Teacher;
  explainJob(this: Teacher): void {
    console.log(`My job is ${this._subject}!!`);
  }
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
  private constructor(name: string, age: number, public _subject: string) {
    super(name, age);
  }
  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
    this.instance = new Teacher("OnlyTeacher", 24, "programing");
    return Teacher.instance;
  }
}

console.log(Person.species);
console.log(Person.isAdult(30));

const onlyTeacher = Teacher.getInstance();
console.log(onlyTeacher);