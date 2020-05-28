'use strict';
console.log("==============================");
console.log("// Task 5");
console.log("==============================");

const checkForSpam = function (message) {
  const messageLowerCase = message.toLowerCase();
  return (messageLowerCase.includes("spam") || messageLowerCase.includes("sale"));
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
