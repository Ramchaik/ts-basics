var userInput;
var userName;
userInput = 5;
userInput = "Vaibhav";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
function infiniteLoop() {
    while (true) { }
}
