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

console.log(combineValues(10, 3));
