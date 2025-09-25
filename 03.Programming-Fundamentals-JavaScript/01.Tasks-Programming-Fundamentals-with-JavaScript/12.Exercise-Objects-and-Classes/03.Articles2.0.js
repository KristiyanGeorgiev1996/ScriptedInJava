const readline = require('readline');

class Article {
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line);
}).on('close', () => {
    const n = parseInt(inputLines[0]);

    for (let i = 1; i <= n; i++) {
        const commandArray = inputLines[i].split(', ');
        const articleX = new Article(commandArray[0], commandArray[1], commandArray[2]);
        console.log(`${articleX.title} - ${articleX.content}: ${articleX.author}`);
    }
});
