let firstNumber = Number(prompt());
let calculation = prompt();
let secNumber = Number(prompt());

let sum = 0;

function MathOperations(firstNumber, secNumber) {
    if (calculation === "*") {
        sum = firstNumber * secNumber;
    } else if (calculation === "+") {
        sum = firstNumber + secNumber;
    } else if (calculation === "/") {
        sum = firstNumber / secNumber;
    } else if (calculation === "-") {
        sum = firstNumber - secNumber;
    }
}

MathOperations(firstNumber, secNumber);
console.log(sum);
