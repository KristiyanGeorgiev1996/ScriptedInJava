const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let hatColorWithNamesAndPhysics = {};
let inputs = [];

rl.on('line', (input) => {
    if (input === "Once upon a time") {
        processInputs();
        rl.close();
    } else {
        inputs.push(input);
    }
});

function processInputs() {
    for (let input of inputs) {
        let inputArray = input.split(" <:> ").map(x => x);
        let name = inputArray[0];
        let hatColor = inputArray[1];
        let physics = Number(inputArray[2]);

        if (!hatColorWithNamesAndPhysics[hatColor]) {
            hatColorWithNamesAndPhysics[hatColor] = {};
            hatColorWithNamesAndPhysics[hatColor][name] = physics;
        } else {
            let haveDwarfWithTheSameName = false;
            for (let currentName in hatColorWithNamesAndPhysics[hatColor]) {
                let currentPhysics = hatColorWithNamesAndPhysics[hatColor][currentName];
                if (currentName === name) {
                    haveDwarfWithTheSameName = true;
                    if (physics > currentPhysics) {
                        hatColorWithNamesAndPhysics[hatColor][currentName] = physics;
                    }
                    break;
                }
            }
            if (!haveDwarfWithTheSameName) {
                hatColorWithNamesAndPhysics[hatColor][name] = physics;
            }
        }
    }

    let sortedHatColor = Object.entries(hatColorWithNamesAndPhysics)
        .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length);

    let finalDwarfs = [];
    for (let [color, dwarfs] of sortedHatColor) {
        for (let [name, power] of Object.entries(dwarfs)) {
            finalDwarfs.push({ name, color, power });
        }
    }

    finalDwarfs.sort((a, b) => b.power - a.power);

    for (let dwarf of finalDwarfs) {
        console.log(`(${dwarf.color}) ${dwarf.name} <-> ${dwarf.power}`);
    }
}
