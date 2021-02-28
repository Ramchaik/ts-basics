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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
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
accounting.addReport("Something went wrong");

console.log(accounting);

// const techCopy = { name: "DUMMY", describe: tech.describe };
// techCopy.describe();
