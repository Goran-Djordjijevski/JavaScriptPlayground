let originalCar = {
    make: "BMW",
    model: "745li",
    year: 2010
};

let newCar = Object.create(originalCar);

console.log(newCar.make);

console.log(Object.getPrototypeOf(newCar));

originalCar.doors = 4;
console.log(newCar.doors);

console.log(originalCar.hasOwnProperty("doors"));
console.log(newCar.hasOwnProperty("doors"));
