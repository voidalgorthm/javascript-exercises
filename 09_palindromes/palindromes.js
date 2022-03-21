const palindromes = function (phrase) {
    const word = phrase.toLowerCase().replace(/[^a-zA-Z]/g, "");
    const length = word.length;
    const last = length - 1;
    if (length % 2 == 0) {
        // even palindromes, odd mid
        mid = (last - 1) / 2;
    } else {
        // odd palindromes, even mid
        mid = last / 2;
    }

    for (let start = 0; start <= mid; start++) {
        if (word.charAt(start) !== word.charAt(last - start)) {
            return false;
        }

        if (start === mid || ((mid - start === 1) && ((last - start) - mid) === 1)) {
            return true;
        }
    }

};

// Do not edit below this line
module.exports = palindromes;
