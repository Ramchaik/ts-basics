class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const tech = new Department("Tech");
console.log(tech);
