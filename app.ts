function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(n1: number): void {
  console.log("Result: ", n1);
}

printResult(add(1, 2));

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = 5;
// combineValues = printResult;

function addAndHandle(n1: number, n2: number, cb: (num: number) => void): void {
  const result = n1 + n2;
  cb(result);
}

console.log(combineValues(10, 3));

addAndHandle(10, 2, (result) => {
  console.log(result);
  return result; // this will be ignored as function type is void and will not raise an error
});
