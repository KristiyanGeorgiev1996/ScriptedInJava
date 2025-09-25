const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', line => inputLines.push(line)).on('close', () => {
    const courses = {};

    for (let input of inputLines) {
        if (input === 'end') break;
        const [courseName, studentName] = input.split(' : ');

        if (!courses[courseName]) {
            courses[courseName] = [];
        }

        courses[courseName].push(studentName);
    }

    Object.keys(courses).forEach(courseName => {
        console.log(`${courseName}: ${courses[courseName].length}`);
        courses[courseName].forEach(student => {
            console.log(`-- ${student}`);
        });
    });
});
