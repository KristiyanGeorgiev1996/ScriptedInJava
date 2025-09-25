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
    const parkingCard = {};

    for (let i = 1; i <= n; i++) {
        const members = inputLines[i].split(' ');
        const action = members[0];
        const username = members[1];

        if (action === 'register') {
            const plateNumber = members[2];
            if (!parkingCard[username]) {
                parkingCard[username] = plateNumber;
                console.log(`${username} registered ${plateNumber} successfully`);
            } else {
                console.log(`ERROR: already registered with plate number ${parkingCard[username]}`);
            }
        } else if (action === 'unregister') {
            if (!parkingCard[username]) {
                console.log(`ERROR: user ${username} not found`);
            } else {
                delete parkingCard[username];
                console.log(`${username} unregistered successfully`);
            }
        }
    }

    Object.keys(parkingCard).forEach(user => {
        console.log(`${user} => ${parkingCard[user]}`);
    });
});
