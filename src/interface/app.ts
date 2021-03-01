interface Named {
  readonly name: string;
}
interface X {
  age: number;
}
interface Greetable extends Named, X {
  greet(phrase: string): void;
}

class PersonX implements Greetable {
  constructor(public name: string, public age: number) {}

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let p1: Greetable;
p1 = new PersonX("John", 36);
// p1.name = "y"; // error as property is readonly

p1.greet("Waba laba dub dub");

type AddFn = (a: number, b: number) => number;
interface IAddFn {
  (a: number, b: number) => number;
}

let addFn: AddFn;
addFn = (n1: number, n2: number) => n1 + n2

let addFn2: IAddFn;
addFn2 = (n1: number, n2: number) => n1 + n2 
