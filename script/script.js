"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let startGame = function () {
  let numberForty = Math.floor(Math.random() * 101);
  console.log("Случайное число " + numberForty);
  let getData = function (flag) {
    if (flag) {
      getNumber();
    } else {
      alert("До скорой встречи!");
    }
  };
  let getNumber = function () {
    let oneNumber = prompt("Угадай число от 1 до 100");
    let claim;

    if (!isNumber(oneNumber) || parseFloat(oneNumber) > 100) {
      claim = confirm("Введи число от 0 до 100!");
      getData(claim);
    } else if (oneNumber == numberForty) {
      alert("Правильно!");
    } else if (oneNumber > numberForty) {
      claim = confirm("Загаданное число меньше.");
      getData(claim);
    } else if (oneNumber < numberForty) {
      claim = confirm("Загаданное число больше.");
      getData(claim);
    }
  };
  return getNumber;
};

let number = startGame();
number();
