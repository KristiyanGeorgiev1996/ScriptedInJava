let number = parseInt(prompt());

let chislo = 0;

if (number % 10 === 0) {
    chislo = 10;
    console.log(`The number is divisible by ${chislo}`);
} else if (number % 7 === 0) {
    chislo = 7;
    console.log(`The number is divisible by ${chislo}`);
} else if (number % 6 === 0) {
    chislo = 6;
    console.log(`The number is divisible by ${chislo}`);
} else if (number % 3 === 0) {
    chislo = 3;
    console.log(`The number is divisible by ${chislo}`);
} else if (number % 2 === 0) {
    chislo = 2;
    console.log(`The number is divisible by ${chislo}`);
}

if (chislo === 0) {
    console.log("Not divisible");
}
