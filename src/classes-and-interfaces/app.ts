class Department {
  private employees: string[] = [];

  constructor(private id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department: ${this.name} (${this.id}) `);
  }

  addEmployee(employee: string) {
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
