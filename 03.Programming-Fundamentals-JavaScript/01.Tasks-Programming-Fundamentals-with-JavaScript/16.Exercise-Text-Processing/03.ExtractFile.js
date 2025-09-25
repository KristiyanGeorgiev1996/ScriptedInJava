const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const fileName = line.split('\\');
    const lastPart = fileName[fileName.length - 1];
    let dotIndex = 0;

    for (let i = 0; i < lastPart.length; i++) {
        if (lastPart[i] === '.') {
            dotIndex = i;
        }
    }

    const name = lastPart.slice(0, dotIndex);
    const extension = lastPart.slice(dotIndex + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);

    rl.close();
});
