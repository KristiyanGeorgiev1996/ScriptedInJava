class Demon {
    constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }
}

function calculateHealth(demonName) {
    const matches = demonName.match(/[^0-9*\/+\-\.]/g) || [];
    return matches.reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
}

function calculateDamage(demonName) {
    let damage = 0;
    const numberMatches = demonName.match(/[-+]?\d+(\.\d+)?/g) || [];
    for (let num of numberMatches) {
        damage += parseFloat(num);
    }
    const modifiers = demonName.match(/[*\/]/g) || [];
    for (let mod of modifiers) {
        if (mod === '*') damage *= 2;
        else if (mod === '/') damage /= 2;
    }
    return damage;
}

const input = "M3ph-0.5s-0.5t0.0**";
const demonPatterns = input.split(/[, ]+/).filter(x => x !== "");

const demons = demonPatterns.map(name => {
    const health = calculateHealth(name);
    const damage = calculateDamage(name);
    return new Demon(name, health, damage);
});

demons.sort((a, b) => a.name.localeCompare(b.name));

for (let demon of demons) {
    console.log(`${demon.name} - ${demon.health} health, ${demon.damage.toFixed(2)} damage`);
}
