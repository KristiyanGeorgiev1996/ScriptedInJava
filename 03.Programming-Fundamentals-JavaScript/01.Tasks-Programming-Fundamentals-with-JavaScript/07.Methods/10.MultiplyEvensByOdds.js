let input = Math.abs(Number(prompt()));
let odd = 0;
let even = 0;

while (input > 0) {
    let lastDigit = input % 10;
    if (lastDigit % 2 === 0) {
        even += lastDigit;
    } else {
        odd += lastDigit;
    }
    input = Math.floor(input / 10);
}

let result = even * odd;
console.log(result);
