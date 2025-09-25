const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (text) => {
    let newText = '';
    for (let i = 0; i < text.length; i++) {
        if (i === 0 || text[i] !== text[i - 1]) {
            newText += text[i];
        }
    }
    console.log(newText);
    rl.close();
});
