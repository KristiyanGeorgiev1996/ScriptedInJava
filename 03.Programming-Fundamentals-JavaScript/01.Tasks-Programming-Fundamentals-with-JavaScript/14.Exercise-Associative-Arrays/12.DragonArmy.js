const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dragons = {};
let inputs = [];
let numberOfDragons = null;

rl.on('line', (line) => {
    if (numberOfDragons === null) {
        numberOfDragons = Number(line);
    } else {
        inputs.push(line);
        if (inputs.length === numberOfDragons) {
            processDragons();
            rl.close();
        }
    }
});

function processDragons() {
    for (let input of inputs) {
        let [type, dragonName, damage, health, armor] = input.split(' ');

        if (damage === "null") damage = "45";
        if (health === "null") health = "250";
        if (armor === "null") armor = "10";

        let dragon = {
            Name: dragonName,
            Damage: Number(damage),
            Health: Number(health),
            Armor: Number(armor)
        };

        if (!dragons[type]) {
            dragons[type] = [dragon];
        } else {
            let existing = dragons[type].find(d => d.Name === dragonName);
            if (existing) {
                existing.Damage = dragon.Damage;
                existing.Health = dragon.Health;
                existing.Armor = dragon.Armor;
            } else {
                dragons[type].push(dragon);
            }
        }
    }

    for (let [type, dragonList] of Object.entries(dragons)) {
        let avgDamage = dragonList.reduce((sum, d) => sum + d.Damage, 0) / dragonList.length;
        let avgHealth = dragonList.reduce((sum, d) => sum + d.Health, 0) / dragonList.length;
        let avgArmor = dragonList.reduce((sum, d) => sum + d.Armor, 0) / dragonList.length;

        console.log(`${type}::(${avgDamage.toFixed(2)}/${avgHealth.toFixed(2)}/${avgArmor.toFixed(2)})`);

        dragonList.sort((a, b) => a.Name.localeCompare(b.Name));

        for (let dragon of dragonList) {
            console.log(`-${dragon.Name} -> damage: ${dragon.Damage}, health: ${dragon.Health}, armor: ${dragon.Armor}`);
        }
    }
}
