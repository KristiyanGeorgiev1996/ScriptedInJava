const readline = require('readline');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Family {
    constructor() {
        this.people = [];
    }

    addMember(member) {
        this.people.push(member);
    }

    getOldestMember() {
        if (this.people.length === 0) return null;
        return this.people.reduce((oldest, current) => current.age > oldest.age ? current : oldest, this.people[0]);
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
    const N = parseInt(inputLines[0]);
    const family = new Family();

    for (let i = 1; i <= N; i++) {
        const [name, ageStr] = inputLines[i].split(' ');
        const age = parseInt(ageStr);
        family.addMember(new Person(name, age));
    }

    const oldest = family.getOldestMember();
    if (oldest) {
        console.log(`${oldest.name} ${oldest.age}`);
    }
});
