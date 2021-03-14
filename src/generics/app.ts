// * Generics
const names: Array<string> = []; // * generic way
// OR
//const names: string[] =[]

// generics set to number
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 2000);
});
promise.then((data) => {
  // data.split(' )
});
