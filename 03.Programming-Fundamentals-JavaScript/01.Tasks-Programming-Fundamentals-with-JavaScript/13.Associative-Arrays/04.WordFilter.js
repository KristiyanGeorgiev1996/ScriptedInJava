const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const words = line.split(' ').filter(w => w.length % 2 === 0);
    words.forEach(word => console.log(word));
    rl.close();
});
