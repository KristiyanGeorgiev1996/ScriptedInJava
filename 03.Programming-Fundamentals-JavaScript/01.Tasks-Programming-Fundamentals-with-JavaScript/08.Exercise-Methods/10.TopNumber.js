let number = parseInt(prompt());

for (let i = 1; i <= number; i++) {
    if (isDigitSumDivisibleBy8(i) && hasOddDigit(i)) {
        console.log(i);
    }
}

function hasOddDigit(num) {
    while (num > 0) {
        if ((num % 10) % 2 === 1) return true;
        num = Math.floor(num / 10);
    }
    return false;
}

function isDigitSumDivisibleBy8(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum % 8 === 0;
}
