class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    console.log("Department: " + this.name);
  }
}

const tech = new Department("Tech");
console.log(tech);

tech.describe();

const techCopy = { describe: tech.describe };
techCopy.describe();
