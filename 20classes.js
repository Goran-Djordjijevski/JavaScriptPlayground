// Declaration
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print() {
        console.log(`${this.make} ${this.model} ${this.year}`);
    }
}

let myCar = new Car("BMW", "745li", 2010);
myCar.print();

class SportsCar extends Car {
    revEngine() {
        console.log("Vrrrroom goes the " + this.model);
    }
}

let mySportsCar = new SportsCar("Dodge", "Viper", 2011);
mySportsCar.print();
mySportsCar.revEngine();