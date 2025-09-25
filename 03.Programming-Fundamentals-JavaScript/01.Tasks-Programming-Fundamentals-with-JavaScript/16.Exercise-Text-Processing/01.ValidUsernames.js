const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const usernames = input.split(', ');
    const validUsernames = usernames.filter(username => {
        return /^[A-Za-z0-9_-]{3,16}$/.test(username);
    });

    validUsernames.forEach(username => console.log(username));
    rl.close();
});
