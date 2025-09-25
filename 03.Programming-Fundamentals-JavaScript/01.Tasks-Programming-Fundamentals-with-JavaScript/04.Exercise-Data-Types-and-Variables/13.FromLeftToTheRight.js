let linesNumber = parseInt(prompt());

for (let i = 0; i < linesNumber; i++) {
    let input = prompt();
    let [leftNumber, rightNumber] = input.split(' ');
    
    let left = BigInt(leftNumber);
    let right = BigInt(rightNumber);

    let maxNumber = left > right ? left : right;
    let sum = 0n;
    maxNumber = maxNumber < 0n ? -maxNumber : maxNumber;

    while (maxNumber > 0n) {
        sum += maxNumber % 10n;
        maxNumber /= 10n;
    }

    console.log(sum.toString());
}
