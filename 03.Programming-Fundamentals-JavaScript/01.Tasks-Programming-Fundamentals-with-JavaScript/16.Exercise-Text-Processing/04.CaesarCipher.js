const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let result = '';
    for (let i = 0; i < line.length; i++) {
        let asciiNumber = line.charCodeAt(i);
        asciiNumber += 3;
        result += String.fromCharCode(asciiNumber);
    }
    console.log(result);
    rl.close();
});
