interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let p1: Person;

p1 = {
  name: "John",
  age: 36,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

p1.greet("Waba laba dub dub");
