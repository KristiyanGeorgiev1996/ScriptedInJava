const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', line => inputLines.push(line)).on('close', () => {
    const contests = {};
    const users = {};

    for (let input of inputLines) {
        if (input === 'no more time') break;
        const [username, contest, pointsStr] = input.split(' -> ');
        const points = parseInt(pointsStr);

        if (!contests[contest]) {
            contests[contest] = {};
        }

        if (!contests[contest][username] || contests[contest][username] < points) {
            contests[contest][username] = points;
        }
    }

    Object.keys(contests).forEach(contest => {
        const participants = contests[contest];
        console.log(`${contest}: ${Object.keys(participants).length} participants`);
        const sortedParticipants = Object.entries(participants)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        sortedParticipants.forEach(([name, points], index) => {
            console.log(`${index + 1}. ${name} <::> ${points}`);
        });
    });

    Object.values(contests).forEach(participants => {
        Object.entries(participants).forEach(([username, points]) => {
            if (!users[username]) {
                users[username] = points;
            } else {
                users[username] += points;
            }
        });
    });

    console.log('Individual standings:');
    const sortedUsers = Object.entries(users)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    sortedUsers.forEach(([name, points], index) => {
        console.log(`${index + 1}. ${name} -> ${points}`);
    });
});
