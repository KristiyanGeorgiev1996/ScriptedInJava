let number = parseInt(prompt());

let sumOfNumber = 0;

while (number != 0) {
    sumOfNumber += number % 10;
    number = Math.floor(number / 10);
}

console.log(sumOfNumber);
