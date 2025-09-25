let input = prompt();

let minNumber = Number.MAX_SAFE_INTEGER;

while (input !== "Stop") {
    let currentNumber = parseInt(input);

    if (currentNumber < minNumber) {
        minNumber = currentNumber;
    }

    input = prompt();
}

console.log(minNumber);
