let firstNum = parseInt(prompt());
let secondNum = parseInt(prompt());

let product = 0;
let times = secondNum;

if (secondNum <= 10) {
    for (let i = secondNum; i <= 10; i++) {
        product = firstNum * times;
        console.log(`${firstNum} X ${times} = ${product}`);
        times += 1;
    }
} else {
    product = firstNum * secondNum;
    console.log(`${firstNum} X ${secondNum} = ${product}`);
}
