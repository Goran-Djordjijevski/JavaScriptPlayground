let firstString = "Knowledge is power but enthusiasm pulls the switch";
let secondString = "Do or do not. There is no try.";
let thirdString = "4,8,15,16,23,42";

let mySplit = thirdString.split(",");
console.log(mySplit);

let mySlice = firstString.slice(13, 18);
console.log(mySlice);

let mySubstring = firstString.substr(13, 5);
console.log(mySubstring);

let myEndsWith = secondString.endsWith("try.");
console.log(myEndsWith);

let myStartsWith = secondString.startsWith("Do");
console.log(myStartsWith);

let myInclude = secondString.includes("There");
console.log(myInclude);

let myRepeat = "Yes! ".repeat(10);
console.log(myRepeat);

let myTrim = "     trimFromStarAndEnd     ";
console.log(myTrim.length);
console.log(myTrim.trim().length);