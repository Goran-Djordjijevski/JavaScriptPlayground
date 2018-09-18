// Regular expressions
let pattern = /xyz/;
console.log(pattern); 
console.log(typeof pattern); // type is object

let value = "This is xyz a test.";
console.log(pattern.test(value)); // Result is true

console.log(value.replace(pattern, "just")); // This is just a test.