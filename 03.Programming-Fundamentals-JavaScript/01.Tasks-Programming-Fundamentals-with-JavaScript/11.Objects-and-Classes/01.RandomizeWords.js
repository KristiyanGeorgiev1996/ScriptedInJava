const readline = require('readline');

class StringRandomizer {
    constructor() {
        this.input = '';
        this.randomizerInput = [];
    }

    randomizeInput() {
        this.randomizerInput = [];
        let splitted = this.input.split(' ');
        let count = splitted.length;

        for (let i = 0; i < count; i++) {
            let index = Math.floor(Math.random() * splitted.length);
            this.randomizerInput.push(splitted[index]);
            splitted.splice(index, 1);
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomizer = new StringRandomizer();

rl.question('', (answer) => {
    randomizer.input = answer;
    randomizer.randomizeInput();

    randomizer.randomizerInput.forEach(item => {
        console.log(item);
    });

    rl.close();
});
