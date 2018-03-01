function sayHello(name) {
    return function () {
        console.log("Hi " + name);
    }
}

let goran = sayHello("Goran");
let dejan = sayHello("Dejan");

goran();
dejan();