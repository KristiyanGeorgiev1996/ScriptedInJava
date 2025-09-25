const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (text) => {
    if (text === "end") {
        rl.close();
    } else {
        let reversedText = '';
        for (let i = text.length - 1; i >= 0; i--) {
            reversedText += text[i];
        }
        console.log(`${text} = ${reversedText}`);
    }
});
