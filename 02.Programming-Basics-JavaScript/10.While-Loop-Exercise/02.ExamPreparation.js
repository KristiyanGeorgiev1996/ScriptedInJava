let maxPoorGrades = parseInt(prompt());

let poorGradesCounter = 0;
let problemsCounter = 0;
let allGrades = 0;
let lastProblem = "";

let nameOfProblem = prompt();

while (nameOfProblem !== "Enough") {
    let currentGrade = parseInt(prompt());
    problemsCounter++;

    if (currentGrade <= 4) {
        poorGradesCounter++;

        if (poorGradesCounter === maxPoorGrades) {
            console.log(`You need a break, ${maxPoorGrades} poor grades.`);
            break;
        }
    }

    allGrades += currentGrade;
    lastProblem = nameOfProblem;

    nameOfProblem = prompt();
}

if (nameOfProblem === "Enough") {
    let averageGrade = allGrades / problemsCounter;

    console.log(`Average score: ${averageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${problemsCounter}`);
    console.log(`Last problem: ${lastProblem}`);
}
