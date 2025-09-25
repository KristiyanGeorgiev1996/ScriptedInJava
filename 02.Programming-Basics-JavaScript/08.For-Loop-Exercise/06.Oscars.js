let actorName = prompt();
let academyPoints = parseFloat(prompt());
let juryCount = parseInt(prompt());

let points = academyPoints;

for (let i = 1; i <= juryCount; i++) {
    let juryName = prompt();
    let juryPoints = parseFloat(prompt());

    points += juryName.length * juryPoints / 2;

    if (points > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
        break;
    }
}

if (points <= 1250.5) {
    let remainingPoints = 1250.5 - points;
    console.log(`Sorry, ${actorName} you need ${remainingPoints.toFixed(1)} more!`);
}
