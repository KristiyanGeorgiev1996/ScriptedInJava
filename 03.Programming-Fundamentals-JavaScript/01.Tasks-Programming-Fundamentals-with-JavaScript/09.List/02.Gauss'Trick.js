let numbers = prompt().split(" ").map(Number);
let result = [];

for (let i = 0; i < Math.floor(numbers.length / 2); i++) {
    let currentResult = numbers[i] + numbers[numbers.length - 1 - i];
    result.push(currentResult);
}

if (numbers.length % 2 === 1) {
    result.push(numbers[Math.floor(numbers.length / 2)]);
}

console.log(result.join(" "));
