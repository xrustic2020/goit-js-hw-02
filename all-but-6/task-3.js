'use strict';
console.log("==============================");
console.log("// Task 3");
console.log("==============================");

const findLongestWord = function (string) {
  const arr = string.split(" ");
  let max = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }
  let longestWord;
  for (let element of arr) {
    if (element.length === max) {
      longestWord = element;
      break
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

