let numbers = prompt().split(" ").map(Number);

for (let i = 0; i < numbers.length; i++) {
    let roundedNumber = Math.round(numbers[i]);
    console.log(`${numbers[i]} => ${roundedNumber}`);
}
