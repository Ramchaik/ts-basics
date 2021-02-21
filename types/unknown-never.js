"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Vaibhav";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message, statusCode: code };
}
function infiniteLoop() {
    while (true) { }
}
//# sourceMappingURL=unknown-never.js.map