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

// this depends on HOW a function is called

// An object can be passed as the first argument to call
// or apply and this will be bound to it

let myObject = {
    value: "My Object"
};

// This property is set on the global object
global.value = "Global object";

function third(name) {
    // returns something different depending on how
    // we call this method
    return this.value + " " + this.name;
}

// Both call and apply allow you to explicitly set
// what you want to represent "this". The difference
// is in how additional arguments to the function are sent.

console.log(third());
console.log(third.call(myObject, "goran"));
console.log(third.apply(myObject, ["goran"]));