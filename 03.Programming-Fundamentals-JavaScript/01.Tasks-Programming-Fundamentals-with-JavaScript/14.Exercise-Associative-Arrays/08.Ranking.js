const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', line => inputLines.push(line)).on('close', () => {
    const contests = {};
    let i = 0;

    while (i < inputLines.length && inputLines[i] !== 'end of contests') {
        const [contest, password] = inputLines[i].split(':');
        contests[contest] = password;
        i++;
    }

    i++; // skip 'end of contests'

    const results = {};

    while (i < inputLines.length && inputLines[i] !== 'end of submissions') {
        const [contest, password, username, pointsStr] = inputLines[i].split('=>');
        const points = parseInt(pointsStr);

        if (contests[contest] && contests[contest] === password) {
            if (!results[username]) {
                results[username] = {};
            }

            if (!results[username][contest] || results[username][contest] < points) {
                results[username][contest] = points;
            }
        }

        i++;
    }

    const winnerEntry = Object.entries(results)
        .map(([user, contests]) => [user, Object.values(contests).reduce((a, b) => a + b, 0)])
        .sort((a, b) => b[1] - a[1])[0];

    console.log(`Best candidate is ${winnerEntry[0]} with total ${winnerEntry[1]} points.`);
    console.log('Ranking:');

    Object.keys(results).sort().forEach(username => {
        console.log(username);
        Object.entries(results[username])
            .sort((a, b) => b[1] - a[1])
            .forEach(([contest, points]) => {
                console.log(`#  ${contest} -> ${points}`);
            });
    });
});
