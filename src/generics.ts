function copy<T extends { name: string }, U extends keyof T>(
  value: T,
  key: U
): T {
  return value;
}

console.log(copy({ name: "Jorge", age: 33 }, "age"));

class LightDataBase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}

const stringLightDataBase = new LightDataBase<string>();
stringLightDataBase.add("string");
console.log(stringLightDataBase.get());
stringLightDataBase.remove("string");
stringLightDataBase.add("newItem");
stringLightDataBase.add("secondItem");
console.log(stringLightDataBase.get());

interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}
let tmp2: ResponseData;
