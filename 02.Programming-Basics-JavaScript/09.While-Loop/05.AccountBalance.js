let input = prompt();

let sum = 0;

while (input !== "NoMoreMoney") {
    let payment = parseFloat(input);

    if (payment < 0) {
        console.log("Invalid operation!");
        break;
    }

    sum += payment;
    console.log(`Increase: ${payment.toFixed(2)}`);

    input = prompt();
}

console.log(`Total: ${sum.toFixed(2)}`);
