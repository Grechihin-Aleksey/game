"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let createGame = function () {
  let numberForty = Math.floor(Math.random() * 101);
  let setValue = 10;
  console.log("Неизвестное число", numberForty);

  let getClaim = function (flag) {
    if (flag) {
      getNumber();
    } else {
      alert("Спасибо, что поиграли со мной");
    }
  };

  let counterTry = function (userTry) {
    userTry--;
    return userTry;
  };

  let incorrectAnswer = function (claim) {
    setValue = counterTry(setValue);
    getClaim(claim);
  };

  let getNumber = function () {
    let claim,
      userNumber = prompt("Угадай число от 1 до 100");

    if (userNumber === null) {
      alert("Может, в следующий раз...");
    } else if (!isNumber(userNumber) || parseFloat(userNumber) > 100) {
      claim = confirm("Введи число от 0 до 100!");
      getClaim(claim);
    } else if (userNumber == numberForty) {
      claim = confirm("Правильно! Сыграем еще?");

      if (claim) {
        numberForty = Math.floor(Math.random() * 101);
        setValue = 10;
        console.log("Загаданное число", numberForty);
        number();
      }
    } else if (setValue > 1) {
      if (userNumber < numberForty) {
        claim = confirm(
          "Неизвестное число больше, осталось попыток " + counterTry(setValue)
        );

        incorrectAnswer(claim);
      } else if (userNumber > numberForty) {
        claim = confirm(
          "Неизвестное число меньше, осталось попыток " + counterTry(setValue)
        );
        incorrectAnswer(claim);
      }
    } else if (setValue === 1) {
      claim = confirm("Попытки закончились, хотите сыграть еще?");

      if (claim) {
        numberForty = Math.floor(Math.random() * 101);
        setValue = 10;
        console.log("Неизвестное число", numberForty);
        number();
      }
    }
  };
  return getNumber;
};

let number = createGame();

number();
