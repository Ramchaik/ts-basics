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

// * Discriminated Unions (pattern)

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

// * `in` is the only solution, you cannot use `instanceof` with interfaces as the object is not mapped to a type
function moveAnimal(animal: Animal) {
  let speed;

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;

    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Animal is moving at " + speed);
}

moveAnimal({ type: "horse", runningSpeed: 10 });

// * Type Casting: forcing TS to infer the value's type as the passed type

// * Problem: TS can't infer the type
// const userInputElement = document.getElementById('user-input')!;
// userInputElement.value = 'x'; // will throw an error as TS can't infer the type of the element is input

// * Type Casting using `< >`
const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")!
);
userInputElement.value = "x";

// * Type Casting using `as`
const userInputElement2 = document.getElementById(
  "user-input"
)! as HTMLInputElement;
userInputElement2.value = "x";

// * Type casting, where we can have null values
const userInputElement3 = document.getElementById("user-input");
if (userInputElement3) {
  (userInputElement3 as HTMLInputElement).value = "x";
}
