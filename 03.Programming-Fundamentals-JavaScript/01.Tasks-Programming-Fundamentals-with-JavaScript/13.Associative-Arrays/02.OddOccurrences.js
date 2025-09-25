const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const words = line.split(' ');
    const counts = {};

    words.forEach(word => {
        const lower = word.toLowerCase();
        counts[lower] = (counts[lower] || 0) + 1;
    });

    Object.keys(counts).forEach(word => {
        if (counts[word] % 2 === 1) {
            process.stdout.write(word + ' ');
        }
    });

    rl.close();
});
