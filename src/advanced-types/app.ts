// * Intersection types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// intersection
type ElevatedEmployee = Admin & Employee;
const eT: ElevatedEmployee = {
  name: "Vaibhav",
  privileges: ["drop-database"],
  startDate: new Date(),
};

interface IAdmin {
  name: string;
  privileges: string[];
}

interface IEmployee {
  name: string;
  startDate: Date;
}

// interface inheritance
interface IElevatedEmployee extends Admin, Employee {};
const eI: ElevatedEmployee = {
  name: "Vaibhav",
  privileges: ["drop-database"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric =  number | boolean;

type Universal = Combinable & Numeric;

// * Type Guard
// ** type guard with `typeof` 
function addVals(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

// ** type guard with `in` 
type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  if ('privileges' in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  
  if ('startDate' in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInfo({name: 'Raju', startDate: new Date()})
