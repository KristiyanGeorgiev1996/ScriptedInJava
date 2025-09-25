const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line);
    if (lines.length === 2) {
        let word = lines[0];
        let text = lines[1];

        let index = text.indexOf(word);

        while (index !== -1) {
            text = text.slice(0, index) + text.slice(index + word.length);
            index = text.indexOf(word);
        }

        console.log(text);
        rl.close();
    }
});
