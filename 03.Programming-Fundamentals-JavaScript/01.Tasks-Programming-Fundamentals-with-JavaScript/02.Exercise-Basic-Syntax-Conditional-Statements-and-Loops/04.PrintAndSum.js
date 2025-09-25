let number1 = parseInt(prompt());
let number2 = parseInt(prompt());

let allSum = 0;

for (let i = number1; i <= number2; i++) {
    process.stdout.write(i + " ");
    allSum += i;
}
console.log();
console.log(`Sum: ${allSum}`);
