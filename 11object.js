let car = {
    make: "BMW",
    model: "745li",
    year: 2010,
    getPrice: function() {
        // perform some calculations
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + " " + this.model);
    }
};

console.log(car.make);
console.log(car.model);
console.log(car.year);

let value = car.getPrice();
console.log(value);

car.printDescription();
car.getPrice();

car.whatever = "Goran";
console.log(car.whatever);

let arrayOfObjects = {
    myArray: [
        { d: "this"},
        { e: "that"}
    ]
};

console.log(arrayOfObjects.myArray[1].e)

let carLot = [
    { year: 2017, make: "Toyota", model: "4Runner" },
    { year: 2015, make: "BMW", model: "528i" },
    { year: 1982, make: "Buick", model: "Skylark" },
];

for (let i = 0; i < carLot.length; i++) {
    const element = carLot[i];

    let result = element.make;

    console.log(result);
}