let n = parseInt(prompt());

for (let currentNum = 1111; currentNum <= 9999; currentNum++) {
    let isSpecial = true;
    let currentNumAsString = currentNum.toString();

    for (let j = 0; j < currentNumAsString.length; j++) {
        let currentDigit = parseInt(currentNumAsString[j]);

        if (currentDigit === 0 || n % currentDigit !== 0) {
            isSpecial = false;
            break;
        }
    }

    if (isSpecial) {
        process.stdout.write(currentNum + " ");
    }
}
