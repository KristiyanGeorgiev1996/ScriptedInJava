const readline = require('readline');

class People {
    constructor(name, ID, age) {
        this.name = name;
        this.ID = ID;
        this.age = age;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let peoples = [];
let inputLines = [];

rl.on('line', (line) => {
    if (line === 'End') {
        peoples.sort((a, b) => a.age - b.age);
        peoples.forEach(person => {
            console.log(`${person.name} with ID: ${person.ID} is ${person.age} years old.`);
        });
        rl.close();
    } else {
        const splittedCommand = line.split(' ');
        const name = splittedCommand[0];
        const ID = splittedCommand[1];
        const age = parseInt(splittedCommand[2]);
        peoples.push(new People(name, ID, age));
    }
});
