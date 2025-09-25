const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const numbers = line.split(' ').map(Number);
    const counts = {};

    numbers.forEach(num => {
        if (counts[num] !== undefined) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    });

    Object.keys(counts).map(Number).sort((a, b) => a - b).forEach(num => {
        console.log(`${num} -> ${counts[num]}`);
    });

    rl.close();
});
