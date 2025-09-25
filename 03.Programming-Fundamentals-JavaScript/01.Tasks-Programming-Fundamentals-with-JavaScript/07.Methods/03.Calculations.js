let mathOperation = prompt();
let firstNumber = Number(prompt());
let secNumber = Number(prompt());

mathOperationFunc(mathOperation);

function mathOperationFunc(mathOperation) {
    let result = 0;
    if (mathOperation === "add") {
        result = firstNumber + secNumber;
    } else if (mathOperation === "divide") {
        result = firstNumber / secNumber;
    } else if (mathOperation === "multiply") {
        result = firstNumber * secNumber;
    } else if (mathOperation === "subtract") {
        result = firstNumber - secNumber;
    }
    console.log(result);
}
