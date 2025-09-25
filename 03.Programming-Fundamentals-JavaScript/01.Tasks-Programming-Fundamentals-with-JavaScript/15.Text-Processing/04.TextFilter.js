const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line);
    if (lines.length === 2) {
        let bannedStrings = lines[0].split(", ");
        let text = lines[1];

        for (let i = 0; i < bannedStrings.length; i++) {
            const stars = '*'.repeat(bannedStrings[i].length);
            text = text.split(bannedStrings[i]).join(stars);
        }

        console.log(text);
        rl.close();
    }
});
