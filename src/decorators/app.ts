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

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
class Printer {
  message = "this works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();
const button = document.querySelector("button")!;
button.addEventListener("click", printer.showMessage);

// ---

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any): boolean {
  const objValidatorsConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorsConfig) {
    return true;
  }

  let isValid = true;
  for (const prop in objValidatorsConfig) {
    for (const validator of objValidatorsConfig[prop]!) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;

        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("Invaid input, please try again!");
    return;
  }
  console.log(createdCourse);
});
