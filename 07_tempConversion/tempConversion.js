const ftoc = function (temp) {
  let converted = (temp - 32) * (5 / 9);
  let fahr = Math.round(converted * 10) / 10;
  return fahr;
};

const ctof = function (temp) {
  let converted = (temp * (9 / 5)) + 32;
  let cels = Math.round(converted * 10) / 10;
  return cels;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
