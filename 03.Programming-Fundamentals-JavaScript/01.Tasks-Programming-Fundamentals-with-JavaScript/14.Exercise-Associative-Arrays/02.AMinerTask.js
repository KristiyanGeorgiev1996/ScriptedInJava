const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line);
}).on('close', () => {
    const resources = {};
    let i = 0;
    while (i < inputLines.length) {
        const resource = inputLines[i];
        if (resource === 'stop') break;
        const sum = parseInt(inputLines[i + 1]);
        if (!resources[resource]) {
            resources[resource] = sum;
        } else {
            resources[resource] += sum;
        }
        i += 2;
    }

    Object.keys(resources).forEach(key => {
        console.log(`${key} -> ${resources[key]}`);
    });
});
