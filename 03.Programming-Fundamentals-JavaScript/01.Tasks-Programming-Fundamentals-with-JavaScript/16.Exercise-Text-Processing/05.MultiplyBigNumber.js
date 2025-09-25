const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [];

rl.on('line', (line) => {
    inputs.push(BigInt(line));
    if (inputs.length === 2) {
        const result = inputs[0] * inputs[1];
        console.log(result.toString());
        rl.close();
    }
});
