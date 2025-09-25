const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const wordArray = line.split(' ');
    const chars = {};

    wordArray.forEach(word => {
        for (let letter of word) {
            chars[letter] = (chars[letter] || 0) + 1;
        }
    });

    Object.keys(chars).forEach(letter => {
        console.log(`${letter} -> ${chars[letter]}`);
    });

    rl.close();
});
