let firstNum = parseInt(prompt());
let secondNum = parseInt(prompt());

for (let currentNum = firstNum; currentNum <= secondNum; currentNum++) {
    let currentNumAsString = currentNum.toString();
    let evenNumsSum = 0;
    let oddNumsSum = 0;

    for (let digitPosition = 0; digitPosition < currentNumAsString.length; digitPosition++) {
        let currentDigit = Number(currentNumAsString[digitPosition]);

        if (digitPosition % 2 === 0) {
            evenNumsSum += currentDigit;
        } else {
            oddNumsSum += currentDigit;
        }
    }

    if (evenNumsSum === oddNumsSum) {
        console.log(currentNum + " ");
    }
}
