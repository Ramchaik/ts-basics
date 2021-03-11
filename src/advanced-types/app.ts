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
interface IElevatedEmployee extends Admin, Employee {}
const eI: ElevatedEmployee = {
  name: "Vaibhav",
  privileges: ["drop-database"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// * Type Guard
// ** type guard with `typeof`
function addVals(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// ** type guard with `in`
type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInfo({ name: "Raju", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo...", amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // * Type guard
  // if ('loadCargo' in vehicle) {
  //   vehicle.loadCargo(100);
  // }
  // * Type guard with `instanceof`, Elegant solution for classes
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}

useVehicle(v1);
useVehicle(v2);

// * Discriminated Unions

interface Bird {
  flyingSpeed: number;
}

interface Horse {
  runningSpeed: number;
}

type Animal = Bird | Horse;

// * `in` is the only solution, you cannot use `instanceof` with interfaces as the object is not mapped to a type
function moveAnimal(animal: Animal) {
  if ("runningSpeed" in animal) {
    console.log("Animal is moving at " + animal);
  } else if ("flyingSpeed" in animal) {
    console.log("Animal is moving at " + animal.flyingSpeed);
  }
}
