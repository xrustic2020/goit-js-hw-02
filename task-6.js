"use strict";
console.log("==============================");
console.log("// Task 6");
console.log("==============================");

let input;
const numbers = [];
let total = 0;

for (input = 0; input !== null; numbers.push(Number(input))) {
  input = prompt("Enter your number");
  console.log(numbers);
}

for (let element of numbers) {
  total += element;
};

console.log(total);
 