"use strict";
console.log("==============================");
console.log("// Task 7");
console.log("==============================");

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = login => login.length >= 4 && login.length <= 16;

const isLoginUnique = (allLogins, login) => !(allLogins.includes(login));

const addLogin = (allLogins, login) => {
  if (isLoginValid(login) === false) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return;
  }
  
  if (isLoginUnique(allLogins, login) === false) {
    console.log("Такой логин уже используется!");
    return;
  }

  logins.push(login);
  console.log('Логин успешно добавлен!');
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'