// * First class decorator
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

function WithTemplate(template: string, hookId: string) {
  return function(constructor: any) {
    console.log('Render template');
    const p = new constructor();
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name
    }
  }
}

// * Decorator Factory's order of execution is top-down
// * Actual Decorator's order of execution is bottom-down
@WithTemplate('<h1> Hello world </h1>', 'app')
@LoggerFactory("LOGGING - PERSON")
class Person {
  name = 'vaibhav';
  constructor() {
    console.log('Creating a new Object');
  }
}

console.log(' ---------- ');


// * Decorator Factory
function LoggerFactory(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

@LoggerFactory("LOGGING - PERSON")
class PersonXYZ {
  constructor() {
    console.log('Creating a new object');
    
  }
}
const x = new PersonXYZ();

// * Property Decorator
// * - target will point to the prototype object of instance for instance property and to constructor on static property
function Log(target: any, propertyName: string) {
  console.log('Decorator Property');
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - Please provide a valid price")
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number): number {
    return this._price * (1 + tax);
  }

}