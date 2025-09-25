let number = Number(prompt());
whatIsNumber(number);

function whatIsNumber(number) {
    if (number < 0) {
        console.log(`The number ${number} is negative.`);
    } else if (number > 0) {
        console.log(`The number ${number} is positive.`);
    } else {
        console.log(`The number ${number} is zero.`);
    }
}
