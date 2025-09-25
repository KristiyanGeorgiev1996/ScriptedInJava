let number = parseInt(prompt());

let nuberCopy = number;
let factSum = 0;

while (nuberCopy > 0) {
    let digit = nuberCopy % 10;
    nuberCopy = Math.floor(nuberCopy / 10);

    let factorial = 1;
    for (let i = 1; i <= digit; i++) {
        factorial *= i;
    }

    factSum += factorial;
}

let isStronngNumber = number === factSum ? "yes" : "no";
console.log(isStronngNumber);
