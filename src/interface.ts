interface addFunc {
  // 関数の型を定義する
  (num1: number, num2: number): number;
}

type Nameable = {
  name?: string;
  nickName?: string;
};
interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  name?: string;
  constructor(
    public age: number,
    public experience: number,
    initName?: string
  ) {
    if ((initName = "Noname")) {
      this.name = initName;
    }
  }
  greeting(message: string = "Hello!") {
    console.log("message");
  }
}
