let numbers = prompt().split(' ').map(Number);
let n = parseInt(prompt());

for (let i = 0; i < n; i++) {
    let firstNum = numbers.shift();
    numbers.push(firstNum);
}

console.log(numbers.join(' '));
