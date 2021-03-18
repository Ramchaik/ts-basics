// * First class decorator
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

function WithTemplate(template: string, hookId: string) {
  return function(constructor: any) {
    const p = new constructor();
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name
    }
  }
}

@WithTemplate('<h1> Hello world </h1>', 'app')
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
