function combine(
  n1: number | string,
  n2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  return result;
}

const combineAges = combine(30, 46, "as-number");
console.log(combineAges);

const combineAges2 = combine("30", "46", "as-number");
console.log(combineAges);

const combineNames = combine("x", "y", "as-text");
console.log(combineNames);
