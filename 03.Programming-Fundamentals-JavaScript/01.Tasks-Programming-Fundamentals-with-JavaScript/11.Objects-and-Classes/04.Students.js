const readline = require('readline');

class Student {
    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.age = '';
        this.homeTown = '';
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let students = [];
let inputLines = [];

rl.on('line', (line) => {
    if (line === 'end') {
        rl.close();
    } else {
        inputLines.push(line);
    }
}).on('close', () => {
    inputLines.forEach(command => {
        const studentData = command.split(' ');
        const studentX = new Student();
        studentX.firstName = studentData[0];
        studentX.lastName = studentData[1];
        studentX.age = studentData[2];
        studentX.homeTown = studentData[3];
        students.push(studentX);
    });

    const city = inputLines[inputLines.length - 1]; // last line is the city

    students.forEach(studentX => {
        if (studentX.homeTown === city) {
            console.log(`${studentX.firstName} ${studentX.lastName} is ${studentX.age} years old.`);
        }
    });
});
