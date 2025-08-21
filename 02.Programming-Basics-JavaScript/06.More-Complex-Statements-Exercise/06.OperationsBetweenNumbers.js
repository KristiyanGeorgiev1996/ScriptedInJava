// Input
let a = Number(prompt());
let b = Number(prompt());
let operation = prompt();

// Calculation
let result = 0;
let isEven = false;

if (operation === '+') {
    result = a + b;
    isEven = result % 2 === 0;

    if (isEven) {
        console.log(`${a} + ${b} = ${result} - even`);
    } else {
        console.log(`${a} + ${b} = ${result} - odd`);
    }
} else if (operation === '-') {
    result = a - b;
    isEven = result % 2 === 0;

    if (isEven) {
        console.log(`${a} - ${b} = ${result} - even`);
    } else {
        console.log(`${a} - ${b} = ${result} - odd`);
    }
} else if (operation === '*') {
    result = a * b;
    isEven = result % 2 === 0;

    if (isEven) {
        console.log(`${a} * ${b} = ${result} - even`);
    } else {
        console.log(`${a} * ${b} = ${result} - odd`);
    }
} else if (operation === '/') {
    if (b === 0) {
        console.log(`Cannot divide ${a} by zero`);
    } else {
        result = a / b;
        console.log(`${a} / ${b} = ${result.toFixed(2)}`);
    }
} else if (operation === '%') {
    if (b === 0) {
        console.log(`Cannot divide ${a} by zero`);
    } else {
        result = a % b;
        console.log(`${a} % ${b} = ${result}`);
    }
}
