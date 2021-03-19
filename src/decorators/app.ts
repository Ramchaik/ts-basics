// * First class decorator
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    console.log("Template factory");
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Render template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// * Decorator Factory's order of execution is top-down
// * Actual Decorator's order of execution is bottom-down
@WithTemplate("<h1> Hello world </h1>", "app")
@LoggerFactory("LOGGING - PERSON")
class Person {
  name = "vaibhav";
  constructor() {
    console.log("Creating a new Object");
  }
}

const p = new Person();

console.log(" ---------- ");

// * Decorator Factory
function LoggerFactory(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@LoggerFactory("LOGGING - PERSON")
class PersonXYZ {
  constructor() {
    console.log("Creating a new object");
  }
}
const x = new PersonXYZ();

// * Property Decorator
// * - target will point to the prototype object of instance for instance property and to constructor on static property
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}

// * Accessor  Decorator
function Log2(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// * Method  Decorator
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// * Parameter  Decorator
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - Please provide a valid price");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number): number {
    return this._price * (1 + tax);
  }
}
