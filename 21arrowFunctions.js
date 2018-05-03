let hi = () => { 
    console.log("Howdy"); 
}

hi();

let hiName = (name) => {
    console.log(`Howdy ${name}`);
};

hiName("Goran");

let add = (a, b) => {
    return a + b;
};

let addTwoNumbers = add(2, 2);
console.log(addTwoNumbers);

let names = ["goran", "zoran", "dejan", "ilija"];
let i = 0;  
names.map((name) => {
    i++;
    console.log(`Howdy ${name} ${i}!`);
});

