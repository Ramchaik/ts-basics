// * First class decorator
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'vaibhav';
  constructor() {
    console.log('Creating a new Object');
  }
}

const p = new Person();

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
