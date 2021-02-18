let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Vaibhav";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, statusCode: code };
}

function infiniteLoop(): never {
  while (true) {}
}
