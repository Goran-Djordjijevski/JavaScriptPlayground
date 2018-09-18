// Destructuring array to the variables
let a, b, c, d, e;

let names = ["goran", "dejan", "ilija", "dragan", "nemanja"];

[a, b, c, d, e] = names;

// console.log(a); // goran
// console.log(b); // dejan
// console.log(c); // ilija
// console.log(d); // dragan
// console.log(e); // nemanja

let others;
[a, b, ...others] = names; // goran, dejan ['ilija', 'dragan', 'nemanja'];

console.log(a);
console.log(b);
console.log(others);

// Destructuring object
let year, model;

({year, model} = {
    make: "BMW",
    model: "745li",
    year: 2010,
    value: 5000
});

console.log(year + " " + model);