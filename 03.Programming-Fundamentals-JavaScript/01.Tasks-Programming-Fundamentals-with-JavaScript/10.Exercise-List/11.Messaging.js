let numbers = prompt().split(" ").map(Number);
let message = prompt();

for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    let index = calculateIndex(currentNumber);

    let currentChar = getCharFromMessage(index, message);
    process.stdout.write(currentChar); // еквивалент на Console.Write

    let realIndex = calculateRealIndex(index, message);
    message = message.slice(0, realIndex) + message.slice(realIndex + 1);
}

console.log();

function calculateIndex(number) {
    let index = 0;
    while (number > 0) {
        index += number % 10;
        number = Math.floor(number / 10);
    }
    return index;
}

function getCharFromMessage(index, message) {
    let countIndex = 0;
    for (let i = 0; i < index; i++) {
        countIndex++;
        if (countIndex === message.length) countIndex = 0;
    }
    return message[countIndex];
}

function calculateRealIndex(index, message) {
    let countIndex = 0;
    for (let i = 0; i < index; i++) {
        countIndex++;
        if (countIndex === message.length) countIndex = 0;
    }
    return countIndex;
}
