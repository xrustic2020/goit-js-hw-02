'use strict';
console.log("==============================");
console.log("// Task 1");
console.log("==============================");

const logItems = function (array) {
  for (let i = 1; i <= (array.length); i += 1) {
    console.log(`${i} - ${array[i - 1]
}`);
  }
};

// Вызовы функции для проверки работоспособности твоей реализации.

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
