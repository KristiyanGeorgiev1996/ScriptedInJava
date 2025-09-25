const numbers = prompt().split(' ').map(Number);

let sumEven = 0;
let sumOdd = 0;

for (let number of numbers) {
    if (number % 2 === 0) {
        sumEven += number;
    } else {
        sumOdd += number;
    }
}

const result = sumEven - sumOdd;
console.log(result);
