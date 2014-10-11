"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.
/*global console*/ // This line tells jsLint that you're allowed to use console.log for printing.

//Problem 1
var coinFlip = function () {
  var number = Math.random();
  if (number < 0.5) {
    return ("Heads");
  }else{
    return ("Tails");
  };
};

coinFlip()

//Problem 2
var diceRoll = function () {
  var number = Math.random();
  if (number >= 0.83) {
    return (6);
  }else if (0.83 > number && number >= 0.67) {
          return (5);
        };
  if (0.67 > number && number >= 0.5) {
    return (4);
  }else if (0.5 > number && number >= 0.33) {
          return (3);
        };
  if (0.33 > number && number >= 0.167) {
    return (2);
  }else if (number < 0.167) {
          return (1);
  };
};

diceRoll()

//problem 3
var diceRoll = function () {
  var number = Math.random();
  if (number >= 0.83) {
    return (6);
  }else if (0.83 > number && number >= 0.67) {
          return (5);
        };
  if (0.67 > number && number >= 0.5) {
    return (4);
  }else if (0.5 > number && number >= 0.33) {
          return (3);
        };
  if (0.33 > number && number >= 0.167) {
    return (2);
  }else if (number < 0.167) {
          return (1);
  };
};

var rollArray;

var fiveRolls = function () {
  rollArray = [];
  for (var count = 0; count < 5; count++) {
  var result = diceRoll();
  rollArray.push(result);
  };
  return rollArray;
};
fiveRolls()
