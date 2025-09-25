const readline = require('readline');

class Song {
    constructor() {
        this.typeList = '';
        this.name = '';
        this.data = '';
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
    const songs = [];

    for (let i = 1; i <= n; i++) {
        const data = inputLines[i].split('_');
        const song = new Song();
        song.typeList = data[0];
        song.name = data[1];
        song.data = data[2];
        songs.push(song);
    }

    const typeList = inputLines[n + 1];

    if (typeList === 'all') {
        songs.forEach(song => console.log(song.name));
    } else {
        songs.forEach(song => {
            if (song.typeList === typeList) {
                console.log(song.name);
            }
        });
    }
});
