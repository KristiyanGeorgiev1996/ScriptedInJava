const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const words = line.split(" ");
    for (let i = 0; i < words.length; i++) {
        for (let k = 0; k < words[i].length; k++) {
            process.stdout.write(words[i]);
        }
    }
    rl.close();
});
