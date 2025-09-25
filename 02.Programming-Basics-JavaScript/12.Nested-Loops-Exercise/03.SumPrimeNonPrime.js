let primeNumsSum = 0;
let nonPrimeNumsSum = 0;

while (true) {
    let input = prompt();

    if (input === "stop") {
        break;
    }

    let number = parseInt(input);

    if (number < 0) {
        console.log("Number is negative.");
        continue;
    }

    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    } else if (number !== 2 && number % 2 === 0) {
        isPrime = false;
    } else {
        for (let i = 3; i <= Math.sqrt(number); i += 2) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        primeNumsSum += number;
    } else {
        nonPrimeNumsSum += number;
    }
}

console.log(`Sum of all prime numbers is: ${primeNumsSum}`);
console.log(`Sum of all non prime numbers is: ${nonPrimeNumsSum}`);
