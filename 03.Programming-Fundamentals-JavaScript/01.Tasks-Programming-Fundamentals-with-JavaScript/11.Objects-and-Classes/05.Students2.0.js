const readline = require('readline');

class Student {
    constructor(firstName, lastName, age, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.city = city;
    }
}

function isStudentExisting(students, firstName, lastName) {
    return students.some(s => s.firstName === firstName && s.lastName === lastName);
}

function getStudent(students, firstName, lastName, age) {
    students.forEach(student => {
        if (student.firstName === firstName && student.lastName === lastName) {
            student.age = age;
        }
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let students = [];
let inputLines = [];

rl.on('line', (line) => {
    if (line === 'end') {
        rl.question('', (filterCity) => {
            const filteredStudents = students.filter(s => s.city === filterCity);
            filteredStudents.forEach(student => {
                console.log(`${student.firstName} ${student.lastName} is ${student.age} years old.`);
            });
            rl.close();
        });
    } else {
        inputLines.push(line);
        const tokens = line.split(' ');
        const firstName = tokens[0];
        const lastName = tokens[1];
        const age = parseInt(tokens[2]);
        const city = tokens[3];

        if (isStudentExisting(students, firstName, lastName)) {
            getStudent(students, firstName, lastName, age);
        } else {
            students.push(new Student(firstName, lastName, age, city));
        }
    }
});
