let message = "Hello World!"; // 13 characters
console.log(message.length); // 13

// Striing Concatenation

// array data structure
let array_one = [111, 222, 3333, 4444, 55555]; // array of numbers
// array by default starts with position 0
console.log(array_one[2]); // 3333

array_one.push(6666); // add 6666 to the end of the array
array_one.pop(); // remove the last element from the array

console.log(array_one.length);

let array_two = [
  "cian",
  111,
  { name: "cian" },
  array_one,
  () => {
    console.log("something");
  },
]; // array of mixed data types

console.log(array_two); // cian
