const readline = require('readline');

class Employee {
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
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
    const N = parseInt(inputLines[0]);
    const employees = [];

    for (let i = 1; i <= N; i++) {
        const [name, salaryStr, department] = inputLines[i].split(' ');
        const salary = parseFloat(salaryStr);
        employees.push(new Employee(name, salary, department));
    }

    const departmentGroups = {};
    employees.forEach(emp => {
        if (!departmentGroups[emp.department]) {
            departmentGroups[emp.department] = [];
        }
        departmentGroups[emp.department].push(emp);
    });

    let highestDept = '';
    let highestAvgSalary = 0;

    for (const dept in departmentGroups) {
        const avgSalary = departmentGroups[dept].reduce((sum, e) => sum + e.salary, 0) / departmentGroups[dept].length;
        if (avgSalary > highestAvgSalary) {
            highestAvgSalary = avgSalary;
            highestDept = dept;
        }
    }

    console.log(`Highest Average Salary: ${highestDept}`);
    departmentGroups[highestDept]
        .sort((a, b) => b.salary - a.salary)
        .forEach(emp => console.log(`${emp.name} ${emp.salary.toFixed(2)}`));
});
