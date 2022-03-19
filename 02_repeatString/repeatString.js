const repeatString = function (string, num) {
    if(num < 0) {
        return "ERROR";
    }

    let final = '';    
    while(num > 0) {
        final += string;
        num--;
    }
    return final;
}
// Do not edit below this line
module.exports = repeatString;
