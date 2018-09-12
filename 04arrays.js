// Create new array with values

let array = [1, 2, 3, 4, 5];

console.log(array[0]);
console.log(array[2]);
console.log(array);

// Undefined because we don't have element at index 5 in the array list
console.log(array[5]);

console.log(array.length);

// array[20] = 100;
array.push(20);
console.log(array);
console.log(array.length);

// When you want to add new element to the array use push() method.
// When you want to remove element from the array use pop() method.