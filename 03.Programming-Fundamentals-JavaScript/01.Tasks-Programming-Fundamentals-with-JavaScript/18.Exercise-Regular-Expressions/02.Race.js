class Participant {
    constructor(name) {
        this.name = name;
        this.distance = 0;
    }
}

const participantsInput = "George, Peter, Bill, Tom";
const raceInput = [
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"
];

const participantsArr = participantsInput.split(", ");
const participants = {};

for (let p of participantsArr) {
    participants[p] = new Participant(p);
}

const lettersPattern = /[A-Za-z]/g;
const digitsPattern = /\d/g;

for (let command of raceInput) {
    if (command === "end of race") break;

    const name = (command.match(lettersPattern) || []).join("");
    const distance = (command.match(digitsPattern) || []).map(Number).reduce((a, b) => a + b, 0);

    if (participants.hasOwnProperty(name)) {
        participants[name].distance += distance;
    }
}

const ordered = Object.values(participants)
    .sort((a, b) => b.distance - a.distance)
    .slice(0, 3);

console.log(`1st place: ${ordered[0].name}`);
console.log(`2nd place: ${ordered[1].name}`);
console.log(`3rd place: ${ordered[2].name}`);
