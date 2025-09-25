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
    const articleAdd = inputLines[0].split(', ');
    const articleX = new Article(articleAdd[0], articleAdd[1], articleAdd[2]);

    const n = parseInt(inputLines[1]);

    for (let i = 0; i < n; i++) {
        const commandArray = inputLines[i + 2].split(' ');
        const action = commandArray[0];
        const value = commandArray.slice(1).join(' ');

        if (action === 'Edit:') {
            articleX.content = value;
        } else if (action === 'ChangeAuthor:') {
            articleX.author = value;
        } else if (action === 'Rename:') {
            articleX.title = value;
        }
    }

    console.log(`${articleX.title} - ${articleX.content}: ${articleX.author}`);
});
