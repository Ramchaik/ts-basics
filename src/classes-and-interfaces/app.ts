class Department {
  // private readonly id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name} (${this.id}) `);
  }

  addEmployee(employee: string) {
    // this.id = 'hahaha';
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const tech = new Department("T-12", "Tech");
console.log(tech);

tech.describe();

tech.addEmployee("raju");
tech.addEmployee("chacha");

tech.printEmployeeInfo();

// const techCopy = { name: "DUMMY", describe: tech.describe };
// techCopy.describe();
