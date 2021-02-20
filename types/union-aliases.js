"use strict";
function combine(n1, n2, resultConversion) {
    var result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultConversion === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combineAges = combine(30, 46, "as-number");
console.log(combineAges);
var combineAges2 = combine("30", "46", "as-number");
console.log(combineAges);
var combineNames = combine("x", "y", "as-text");
console.log(combineNames);
