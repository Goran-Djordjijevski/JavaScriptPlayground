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