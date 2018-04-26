// Create simple function sayHi()
function sayHi() {
    console.log("-----------");
    console.log("Hi!");
    console.log("-----------");
}

// Call the simple function
sayHi();

// Create a function with the input parameter
function sayHiWithInputParameter(name) {
    console.log("-----------");
    console.log("Hi " + name + "!");
    console.log("-----------");
}

// Call a function with a input parameter
sayHiWithInputParameter("Goran");

// Create a function with a return statement
function calculateTax(value) {
    let result = value * 1.1;

    return result;
}

// Call a function and return a value to the variable
let tax1 = calculateTax(100);
let tax2 = calculateTax(200);
console.log(tax1);
console.log(tax2);