let n = parseInt(prompt());

for (let i = 1; i <= n; i++) {
    let currentNumber = i;
    let digitSum = 0;

    while (currentNumber > 0) {
        digitSum += currentNumber % 10;
        currentNumber = Math.floor(currentNumber / 10);
    }

    let isSpecial = (digitSum === 5 || digitSum === 7 || digitSum === 11);
    console.log(`${i} -> ${isSpecial}`);
}
