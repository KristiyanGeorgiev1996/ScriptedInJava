let tournamentsCount = parseInt(prompt());
let initialPoints = parseInt(prompt());

let points = 0;
let winsCount = 0;

for (let i = 1; i <= tournamentsCount; i++) {
    let tournamentResult = prompt();

    switch (tournamentResult) {
        case "W":
            points += 2000;
            winsCount++;
            break;
        case "F":
            points += 1200;
            break;
        case "SF":
            points += 720;
            break;
    }
}

let averagePoints = points / tournamentsCount;
points += initialPoints;
let winsPercent = (winsCount / tournamentsCount) * 100;

console.log(`Final points: ${points}`);
console.log(`Average points: ${Math.floor(averagePoints)}`);
console.log(`${winsPercent.toFixed(2)}%`);
