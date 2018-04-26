// if statement

let number = 3;
if (number == 3) {
    console.log("This is true")
}
else {
    console.log("This is false");
}

// switch statement
let hero = "batman";
switch (hero.toLowerCase()) {
    case "batman":
        console.log("I am batman");
        break;
    case "supermen":
        console.log("I am supermen");
        break;
    default:
        console.log("I am not a superhero");
        break;
}

// ternary operator examples
let first = 1, second = 1;
let result = (first == second) ? "equal" : "inequal";
console.log(result);