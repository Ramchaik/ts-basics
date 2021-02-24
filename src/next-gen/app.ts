const add1 = (a: number, b: number = 1) => a + b;
const printOutput = (output: string | number) => console.log(output);
const printOutput1: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add1(1, 2));
printOutput(add1(2));
