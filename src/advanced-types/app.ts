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
