let names = ["david", "eddie", "alex", "michael"];
let others = ["sammy", "gary", "wolfgang", "mark"];

let lost = [4, 18, 15, 16, 23, 42];
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

let combine = lost.concat(fibonacci);
console.log(combine);

let joinWithTilda = fibonacci.join("~");
console.log(joinWithTilda);

let removeFirstNumberFromArray = lost.shift();
console.log(removeFirstNumberFromArray);
console.log(lost);

let addNumberToTheFrontOfArray = lost.unshift(99);
console.log(lost);

let reverseNames = names.reverse();
console.log(reverseNames);

let sortNames = names.sort();
console.log(sortNames);

let whereIsMark = others.indexOf("mark");
console.log(whereIsMark);

let whoIsTheLast = combine.lastIndexOf(1);
console.log(whoIsTheLast);

let filtered = combine.filter(x => {
    if (x <= 15) {
        return x;
    }
})

console.log(filtered);