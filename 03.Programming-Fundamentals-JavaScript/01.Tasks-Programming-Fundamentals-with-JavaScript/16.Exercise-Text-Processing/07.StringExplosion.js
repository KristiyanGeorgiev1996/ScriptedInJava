const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (text) => {
    let explosionStrength = 0;
    let result = '';

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '>') {
            result += '>';
            explosionStrength += Number(text[i + 1]);
        } else if (explosionStrength > 0) {
            explosionStrength--;
        } else {
            result += text[i];
        }
    }

    console.log(result);
    rl.close();
});
