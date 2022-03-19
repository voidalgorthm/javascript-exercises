const reverseString = function(string) {
    let reverse = '';
    let lastIndex = string.length;
    for (lastIndex; lastIndex >= 0; lastIndex--) {
        reverse += string.charAt(lastIndex);
    }
   /* while(lastIndex >= 0){
        reverse += string.charAt(lastIndex);
        lastIndex--;
    }*/
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
