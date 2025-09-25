let number = parseInt(prompt());

while (number % 2 !== 0) {
    console.log("Please write an even number.");
    number = parseInt(prompt());
}

if (number % 2 === 0) {
    let num = Math.abs(number);
    console.log(`The number is: ${num}`);
}
