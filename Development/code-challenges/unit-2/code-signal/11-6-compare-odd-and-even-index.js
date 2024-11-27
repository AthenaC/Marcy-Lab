// my code:
const solution = (numbers) => {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 === 0) {
            even += numbers[i];
        } else {
            odd += numbers[i];
        };
    };
    if (even === odd) {
        return "equal";
    } else if (even > odd) {
        return "even";
    } else {
        return "odd";
    };
};