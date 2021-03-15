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
function merge<T extends object, U extends object> (objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergeObject = merge({name: 'vaibhav', hobbies: ['A']}, 24); // ! throws error as arguments are now constraint
const mergeObject = merge({name: 'vaibhav', hobbies: ['A']}, {age: 24});
console.log(mergeObject);

