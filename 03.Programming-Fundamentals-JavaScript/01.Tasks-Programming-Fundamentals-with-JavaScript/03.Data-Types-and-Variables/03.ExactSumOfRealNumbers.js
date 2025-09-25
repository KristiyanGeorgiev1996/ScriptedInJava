let numbers = parseInt(prompt());
let sum = 0;

for (let i = 0; i < numbers; i++) {
    let number = parseFloat(prompt());
    sum += number;
}
console.log(sum);
