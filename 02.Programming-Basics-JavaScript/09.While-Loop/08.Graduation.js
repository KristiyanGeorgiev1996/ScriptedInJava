let studentName = prompt();

let expelsCount = 0;
let yearsCount = 0;
let gradesSum = 0;

while (expelsCount < 2 && yearsCount < 12) {
    let grade = parseFloat(prompt());
    yearsCount++;
    if (grade < 4) {
        expelsCount++;
        continue;
    }
    gradesSum += grade;
}

if (expelsCount < 2) {
    let averageGrade = gradesSum / yearsCount;
    console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
} else {
    console.log(`${studentName} has been excluded at ${yearsCount - 1} grade`);
}
