let input = prompt();

let maxNumber = Number.MIN_SAFE_INTEGER;

while (input !== "Stop") {
    let currentNumber = parseInt(input);

    if (currentNumber > maxNumber) {
        maxNumber = currentNumber;
    }

    input = prompt();
}

console.log(maxNumber);
