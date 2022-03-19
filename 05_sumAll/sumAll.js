const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }

    let beginNumber = num1;
    let endNumber = num2;
    if (num2 < num1) {
        beginNumber = num2;
        endNumber = num1;
    } 

    let sum = 0;
    for (i = beginNumber; i <= endNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
