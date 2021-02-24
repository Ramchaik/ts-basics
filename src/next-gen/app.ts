const add1 = (a: number, b: number = 1) => a + b;
const printOutput = (output: string | number) => console.log(output);
const printOutput1: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add1(1, 2));
printOutput(add1(2));

const hobbies = ["Sports", "Cooking"];
// const activeHobbies = ["Hiking", ...hobbies];

const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);

const personA = {
  name: "John",
  age: 21,
};
const copiedPersonA = { ...personA };
