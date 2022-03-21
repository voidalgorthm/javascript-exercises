const fibonacci = function (member) {
    let converted = Number(member);
    if (converted < 0 || typeof converted !== 'number') {
        return "OOPS";
    }

    let pop = 1;
    let push = 1;
    let fibo = 0;
    for (let i = 1; i <= converted; i++) {
        let stack = pop + push; // 2 3 5
        fibo = pop; // 1 1 2
        pop = push; // 1 2 3
        push = stack; // 2 3 5

        if (i === converted) return fibo;
    }
};

// Do not edit below this line
module.exports = fibonacci;
