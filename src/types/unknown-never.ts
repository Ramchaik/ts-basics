let userInput: unknown;
let userName: string;

someUserInput = 5;
someUserInput = "Vaibhav";

if (typeof someUserInput === "string") {
  userName = someUserInput;
}

function generateError(message: string, code: number): never {
  throw { message, statusCode: code };
}

function infiniteLoop(): never {
  while (true) {}
}
