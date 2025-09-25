const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line);
}).on('close', () => {
    const n = parseInt(inputLines[0]);
    const wordSynonyms = {};

    for (let i = 1; i <= n * 2; i += 2) {
        const word = inputLines[i];
        const synonym = inputLines[i + 1];

        if (!wordSynonyms[word]) {
            wordSynonyms[word] = [];
        }
        wordSynonyms[word].push(synonym);
    }

    Object.keys(wordSynonyms).forEach(word => {
        console.log(`${word} - ${wordSynonyms[word].join(', ')}`);
    });
});
