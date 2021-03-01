abstract class Department {
  // private readonly id: string;
  // public name: string;
  static fiscalYear = 2021;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

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

  describe() {
    console.log("IT Department: ", this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReported: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReported = reports[0]!;
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      // * `this` in static method refers to class itself,
      // * so this.instance and AccountingDepartment.instance
      // * refers to same property inside static methods
      return this.instance;
    }

    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department: ", this.id);
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
it.describe();

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

accounting.addEmployee("x");
accounting.addEmployee("Vaibhav");
accounting.printEmployeeInfo();

accounting.addReport("Something went wrong");
// * Setter
accounting.mostRecentReport = "Year end Report";
// * Getter
console.log(accounting.mostRecentReport);

accounting.describe();

console.log(accounting);
console.log(accounting2);

console.log(Department.createEmployee("Hello"), Department.fiscalYear);

// const techCopy = { name: "DUMMY", describe: tech.describe };
// techCopy.describe();
