const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', line => inputLines.push(line)).on('close', () => {
    class Player {
        constructor(name) {
            this.name = name;
            this.positions = {};
        }

        addOrUpdatePosition(position, skill) {
            if (!this.positions[position] || this.positions[position] < skill) {
                this.positions[position] = skill;
            }
        }

        getTotalSkillPoints() {
            return Object.values(this.positions).reduce((a, b) => a + b, 0);
        }

        getPositions() {
            return Object.keys(this.positions);
        }
    }

    const dictNamePlayer = {};

    for (let command of inputLines) {
        if (command === 'Season end') break;

        if (!command.includes('vs')) {
            const [playerName, position, skillStr] = command.split(' -> ');
            const skill = parseInt(skillStr);

            if (!dictNamePlayer[playerName]) {
                dictNamePlayer[playerName] = new Player(playerName);
            }
            dictNamePlayer[playerName].addOrUpdatePosition(position, skill);
        } else {
            const [firstPlayer, , secondPlayer] = command.split(' ');
            if (!dictNamePlayer[firstPlayer] || !dictNamePlayer[secondPlayer]) continue;

            const playerOne = dictNamePlayer[firstPlayer];
            const playerTwo = dictNamePlayer[secondPlayer];

            const duelsCount = playerOne.getPositions().filter(pos => playerTwo.getPositions().includes(pos)).length;
            if (duelsCount > 0) {
                if (playerOne.getTotalSkillPoints() > playerTwo.getTotalSkillPoints()) {
                    delete dictNamePlayer[secondPlayer];
                } else if (playerTwo.getTotalSkillPoints() > playerOne.getTotalSkillPoints()) {
                    delete dictNamePlayer[firstPlayer];
                }
            }
        }
    }

    const players = Object.values(dictNamePlayer).sort((a, b) => {
        if (b.getTotalSkillPoints() !== a.getTotalSkillPoints()) {
            return b.getTotalSkillPoints() - a.getTotalSkillPoints();
        }
        return a.name.localeCompare(b.name);
    });

    for (let player of players) {
        console.log(`${player.name}: ${player.getTotalSkillPoints()} skill`);
        Object.entries(player.positions)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach(([position, skill]) => {
                console.log(`- ${position} <::> ${skill}`);
            });
    }
});
