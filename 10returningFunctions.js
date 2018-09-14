// Don't do this!!!
// var myVariable = "I am at the global scope";

// // This either
// var myFunction = function() {
//     console.log("me too!!!");
// };

function returnFunc() {
    return function() {
        console.log("return my function");
    }
}

let myFunc = returnFunc();
myFunc();

function returnFuncFromFunc() {
    return function () {
        return "return function from function"
    }
}

let returnFuncValue = returnFuncFromFunc()();
console.log(returnFuncValue);