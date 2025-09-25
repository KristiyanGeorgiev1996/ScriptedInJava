const readline = require('readline');

class Student {
    constructor(firstName, lastName, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
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
    const n = parseInt(inputLines[0]);
    let students = [];

    for (let i = 1; i <= n; i++) {
        const splittedCommand = inputLines[i].split(' ');
        const firstName = splittedCommand[0];
        const lastName = splittedCommand[1];
        const grade = parseFloat(splittedCommand[2]);
        students.push(new Student(firstName, lastName, grade));
    }

    students.sort((a, b) => b.grade - a.grade);

    students.forEach(student => {
        console.log(`${student.firstName} ${student.lastName}: ${student.grade.toFixed(2)}`);
    });
});
