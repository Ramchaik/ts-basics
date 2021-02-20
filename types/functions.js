"use strict";
function sum(n1, n2) {
    return n1 + n2;
}
function printResult(n1) {
    console.log("Result: ", n1);
}
printResult(sum(1, 2));
var combineValues;
combineValues = sum;
// combineValues = 5;
// combineValues = printResult;
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
console.log(combineValues(10, 3));
addAndHandle(10, 2, function (result) {
    console.log(result);
    return result; // this will be ignored as function type is void and will not raise an error
});
