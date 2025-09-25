const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const randomStrings = line.split(' ');
    let totalSum = 0;

    const len1 = randomStrings[0].length;
    const len2 = randomStrings[1].length;
    const minLen = Math.min(len1, len2);

    for (let i = 0; i < minLen; i++) {
        totalSum += randomStrings[0].charCodeAt(i) * randomStrings[1].charCodeAt(i);
    }

    if (len1 > len2) {
        for (let i = len2; i < len1; i++) {
            totalSum += randomStrings[0].charCodeAt(i);
        }
    } else if (len2 > len1) {
        for (let i = len1; i < len2; i++) {
            totalSum += randomStrings[1].charCodeAt(i);
        }
    }

    console.log(totalSum);
    rl.close();
});
