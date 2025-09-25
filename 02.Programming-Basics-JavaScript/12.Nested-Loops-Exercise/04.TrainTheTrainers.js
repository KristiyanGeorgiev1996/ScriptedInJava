let juryCount = parseInt(prompt());

let presentationsCount = 0;
let allGradesSum = 0;
let currentGradesSum = 0;
let presentationName = "";

while ((presentationName = prompt()) !== "Finish") {
    presentationsCount++;

    for (let i = 1; i <= juryCount; i++) {
        let grade = parseFloat(prompt());
        currentGradesSum += grade;
        allGradesSum += grade;
    }

    let averageGrade = currentGradesSum / juryCount;
    currentGradesSum = 0;

    console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);
}

let averageGradeAll = allGradesSum / (presentationsCount * juryCount);
console.log(`Student's final assessment is ${averageGradeAll.toFixed(2)}.`);
