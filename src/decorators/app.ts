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