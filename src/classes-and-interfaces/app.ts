class Department {
  private id: string;
  private name: string;
  private employees: string[] = [];

  constructor(id: string, name: string) {
    this.name = name;
    this.id = id;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const tech = new Department("Tech");
console.log(tech);

tech.describe();

tech.addEmployee("raju");
tech.addEmployee("chacha");

tech.printEmployeeInfo();

// const techCopy = { name: "DUMMY", describe: tech.describe };
// techCopy.describe();
