let x = 7;
let y = parseInt("6");
let z = x + y;

console.log("Anwser: " + z);
console.log(typeof z);

let nanValue = parseInt("a");
console.log(nanValue); // Result is NaN - Not a Number

let result = isNaN(nanValue);
console.log(result); // Result is true

