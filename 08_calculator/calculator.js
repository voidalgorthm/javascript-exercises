const add = function (num1, num2) {
  let sum = num1 + num2;
  return sum;
};

const subtract = function (num1, num2) {
  let diff = num1 - num2;
  return diff;
};

const sum = function ([...nums]) {
  let array = [...nums];
  let sum = 0;

  for (const num of array) {
    sum += num;
  }
  return sum;
};

const multiply = function ([...nums]) {
  let array = [...nums];
  let product = array[0];

  for (let index = 1; index < array.length; index++) {
    product *= array[index];
  }

  return product;
};

const power = function (num1, num2) {
  let powered = num1 ** num2;
  return powered;
};

const factorial = function (num) {
  let fact = 1;
  if (num === 0 || num === 1) {
    fact = 1 ** num;
  } else {
    for (let index = fact; index <= num; index++) {
      fact *= index;
    }
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
