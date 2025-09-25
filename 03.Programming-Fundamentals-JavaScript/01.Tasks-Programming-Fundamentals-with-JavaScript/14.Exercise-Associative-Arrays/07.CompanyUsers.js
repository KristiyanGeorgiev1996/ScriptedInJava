const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', line => inputLines.push(line)).on('close', () => {
    const companies = {};

    for (let input of inputLines) {
        if (input === 'End') break;
        const [companyName, employeeId] = input.split(' -> ');

        if (!companies[companyName]) {
            companies[companyName] = new Set();
        }

        companies[companyName].add(employeeId);
    }

    Object.keys(companies).forEach(companyName => {
        console.log(companyName);
        companies[companyName].forEach(employeeId => {
            console.log(`-- ${employeeId}`);
        });
    });
});
