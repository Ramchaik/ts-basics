// * Generics
// const names: Array<string> = []; // * generic way
// OR
//const names: string[] =[]

// generics set to number
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(10), 2000);
// });
// promise.then((data) => {
// data.split(' )
// });

// * Custom Generics with constraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergeObject = merge({name: 'vaibhav', hobbies: ['A']}, 24); // ! throws error as arguments are now constraint
const mergeObject = merge({ name: "vaibhav", hobbies: ["A"] }, { age: 24 });
console.log(mergeObject);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = "Got no value";

  if (element.length === 1) {
    description = "Got 1 value.";
  } else if (element.length > 1) {
    description = "Got " + element.length + " value.";
  }

  return [element, description];
}

console.log(countAndDescribe(['a', 'b']));

// * Adding constraint with `keyof`
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

// console.log(extractAndConvert({}, 'name')); //! error as property is not on the passed object
console.log(extractAndConvert({name: 'vaibhav'}, 'name'));

