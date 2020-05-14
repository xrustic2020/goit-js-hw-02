'use strict';
console.log("==============================");
console.log("// Task 4");
console.log("==============================");

const formatString = function (string) {
  let arrString;
  if (string.length <= 40) {
    arrString = string;
  } else if (string.length > 40) {
    arrString = string.split("");
    arrString.length = 40;
    arrString = `${arrString.join('')}...`;
  }
  return arrString;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
