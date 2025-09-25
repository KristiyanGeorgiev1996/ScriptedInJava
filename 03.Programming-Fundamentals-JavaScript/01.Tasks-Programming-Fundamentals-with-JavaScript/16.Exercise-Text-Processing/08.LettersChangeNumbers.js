const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const strings = input.trim().split(/\s+/);
    let totalSum = 0;

    for (const str of strings) {
        const firstChar = str[0];
        const lastChar = str[str.length - 1];
        const numberStr = str.slice(1, str.length - 1);
        const number = Number(numberStr);

        if (firstChar >= 'A' && firstChar <= 'Z') {
            const divisor = firstChar.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
            totalSum += number / divisor;
        } else if (firstChar >= 'a' && firstChar <= 'z') {
            const multiplier = firstChar.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
            totalSum += number * multiplier;
        }

        if (lastChar >= 'A' && lastChar <= 'Z') {
            totalSum -= lastChar.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        } else if (lastChar >= 'a' && lastChar <= 'z') {
            totalSum += lastChar.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        }
    }

    console.log(totalSum.toFixed(2));
    rl.close();
});
