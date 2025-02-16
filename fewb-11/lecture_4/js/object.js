alert("Hello from object.js");

let age = 26;
let name = "cian";
let salary = 39520;
let isMarried = false;

let John = {
  age: 18,
  name: "John",
  salary: 100000,
  isMarried: true,
};

let Jack = {
  age: 5,
  name: "Jack",
  salary: 0,
  isMarried: false,
};

function canDrink(person) {
  return person.age >= 18; // boolean
}

function sum(value, value2, value3) {
  return value + value2 + value3;
}

console.log("john details:", John);
console.log("Jack details:", Jack);

console.log("John can drink?", canDrink(John)); // true
console.log("Jack can drink?", canDrink(Jack)); // false

console.log("Sum of 10, 20, and 30:", sum(10, 20, 30)); // 60
console.log("Sum of 1, 2, and 3:", sum(1, 2, 3)); // 6
console.log("Sum of 88, 66, and 77 is:", sum(88, 66, 77)); // 231
