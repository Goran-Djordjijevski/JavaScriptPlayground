var car = {
    make: "BMW",
    model: "745li",
    year: 2010,
    getPrice: function () {
        // perform some calculations
        return 5000;
    },

    printDescription: function () {
        console.log(this.make + " " + this.model);
    }
};

function first() {
    return this;
}

console.log(first() === global);

// this is Node's global object
// because that's where the
// first method was called

function second() {
    "use strict";

    return this;
}

console.log(second() === undefined);

let myObject = {
    value: "My Object"
};

// value is set on the global object
global.value = "Global object";

function third() {
    return this.value;
}

console.log(third());
console.log(third.call(myObject));