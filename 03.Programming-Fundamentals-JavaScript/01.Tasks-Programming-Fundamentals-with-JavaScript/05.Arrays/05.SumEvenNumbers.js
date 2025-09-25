let numbers = prompt().split(" ").map(Number);

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    if (currentNumber % 2 === 0) {
        sum += currentNumber;
    }
}

console.log(sum);
