const removeFromArray = function ([...alphanumeric], ...remove) {
    const removal = Array.of(...remove);
    let array = [...alphanumeric];

    for (const rmv of removal) {

        if (array.includes(rmv)) {
            const removedIndex = array.indexOf(rmv);
            array.splice(removedIndex, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
