interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
}

interface X {
  age: number;
}

class PersonX implements Greetable, X {
  constructor(public name: string, public age: number) {}

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let p1: Greetable;
p1 = new PersonX("John", 36);
p1.name = "y";

p1.greet("Waba laba dub dub");
