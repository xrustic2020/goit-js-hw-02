"use strict";
console.log("==============================");
console.log("// Task 5");
console.log("==============================");

const checkForSpam = function (message) {
  const messageLowerCase = message.toLowerCase();
  console.log(messageLowerCase); // delete after
  const arrMessage = messageLowerCase.split(" ");

  const stopWord1 = "spam";
  const stopWord2 = "sale";

  let result;
  for (let word of arrMessage) {
    if (word.includes(stopWord1) || word.includes(stopWord2)) {
      result = true;
      break
    } else {
      result = false;
    }
  }
  return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
