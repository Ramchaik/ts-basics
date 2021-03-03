interface Named {
  readonly name?: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class PersonX implements Greetable {
  constructor(public name?: string) {}

  greet(phrase: string) {
    if (!this.name) {
      console.log("hi!");
    } else {
      console.log(phrase + " " + this.name);
    }
  }
}

let p1: Greetable;
p1 = new PersonX("John");

const p2 = new PersonX();
p2.greet("whatsupp!")

// p1.name = "y"; // error as property is readonly

p1.greet("Waba laba dub dub");

type AddFn = (a: number, b: number) => number;
interface IAddFn {
  (a: number, b: number): number;
}

let addFn: AddFn;
addFn = (n1: number, n2: number) => n1 + n2;

let addFn2: IAddFn;
addFn2 = (n1: number, n2: number) => n1 + n2;
