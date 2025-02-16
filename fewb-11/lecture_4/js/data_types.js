alert("Hello from data_types.js");
let x = "18"; // type number
x = parseInt(x); // convert of string number
console.log(typeof x);

let d = "Cian";
console.log(typeof x);

let b = typeof x === "string"; // false
console.log(typeof b);

let car;

if (car) {
  console.log("car is defined");
} else {
  console.log("car is not defined");
}

if (typeof x === "string") {
  console.log(x.includes("8"));
}
