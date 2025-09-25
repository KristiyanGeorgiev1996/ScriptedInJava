class Message {
    constructor(planetName, population, attackType, soldierCount) {
        this.planetName = planetName;
        this.population = population;
        this.attackType = attackType;
        this.soldierCount = soldierCount;
    }
}

const messagesInput = [
    "STCDoghudd4=63333$D$0A53333",
    "EHfsytsnhf?8555&I&2C9555SR"
];

const messages = [];
const starPattern = /[SsTtAaRr]/g;
const msgPattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>A|D)![^@\-!:>]*->[^@\-!:>]*(?<soldiers>\d+)/;

for (let encryptMsg of messagesInput) {
    const decryptionKey = (encryptMsg.match(starPattern) || []).length;

    let decryptedMsg = '';
    for (let ch of encryptMsg) {
        decryptedMsg += String.fromCharCode(ch.charCodeAt(0) - decryptionKey);
    }

    const match = decryptedMsg.match(msgPattern);
    if (!match) continue;

    const { planet, population, type, soldiers } = match.groups;
    messages.push(new Message(planet, Number(population), type, Number(soldiers)));
}

let attacked = messages.filter(m => m.attackType === "A").sort((a, b) => a.planetName.localeCompare(b.planetName));
console.log(`Attacked planets: ${attacked.length}`);
attacked.forEach(m => console.log(`-> ${m.planetName}`));

let destroyed = messages.filter(m => m.attackType === "D").sort((a, b) => a.planetName.localeCompare(b.planetName));
console.log(`Destroyed planets: ${destroyed.length}`);
destroyed.forEach(m => console.log(`-> ${m.planetName}`));
