const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', line => inputLines.push(line)).on('close', () => {
    const n = parseInt(inputLines[0]);
    const students = {};

    for (let i = 1; i <= n * 2; i += 2) {
        const name = inputLines[i];
        const grade = parseFloat(inputLines[i + 1]);

        if (!students[name]) {
            students[name] = [];
        }

        students[name].push(grade);
    }

    Object.keys(students).forEach(name => {
        const grades = students[name];
        const averageGrade = grades.reduce((a, b) => a + b, 0) / grades.length;
        if (averageGrade >= 4.5) {
            console.log(`${name} -> ${averageGrade.toFixed(2)}`);
        }
    });
});
