'use strict';

let input;

let total = 0;

for (input = 0; input !== null; total += Number(input)) {
  input = prompt('Введите, пожалуйста, число');
}

alert(`Общая сумма чисел равна ${total}`);
