class Department {
  // private readonly id: string;
  // public name: string;
  static fiscalYear = 2021;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  static createEmployee(name: string) {
    return { name };
  }

  describe(this: Department) {
    console.log(`Department: ${this.name} (${this.id}) `);
  }

  addEmployee(employee: string) {
    // this.id = 'hahaha';
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    // * can only access static property/method using Class
    console.log(Department.fiscalYear);
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  private lastReported: string;

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReported = reports[0]!;
  }

  get mostRecentReport() {
    if (this.lastReported) {
      return this.lastReported;
    }

    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReported = text;
  }

  addEmployee(employee: string) {
    if (employee === "x") {
      return;
    }

    this.employees.push(employee);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["x"]);
console.log(it);

it.describe();

it.addEmployee("raju");
it.addEmployee("chacha");

it.printEmployeeInfo();

const accounting = new AccountingDepartment("d2", []);

accounting.addEmployee("x");
accounting.addEmployee("Vaibhav");
accounting.printEmployeeInfo();

accounting.addReport("Something went wrong");
// * Setter
accounting.mostRecentReport = "Year end Report";
// * Getter
console.log(accounting.mostRecentReport);

console.log(accounting);

console.log(Department.createEmployee("Hello"), Department.fiscalYear);

// const techCopy = { name: "DUMMY", describe: tech.describe };
// techCopy.describe();
