const readline = require('readline');

class Car {
    constructor(model, fuelAmount, fuelConsumptionPerKm) {
        this.model = model;
        this.fuelAmount = fuelAmount;
        this.fuelConsumptionPerKm = fuelConsumptionPerKm;
        this.traveledDistance = 0;
    }

    drive(amountOfKm) {
        const neededFuel = amountOfKm * this.fuelConsumptionPerKm;
        if (neededFuel <= this.fuelAmount) {
            this.fuelAmount -= neededFuel;
            this.traveledDistance += amountOfKm;
            return true;
        } else {
            console.log("Insufficient fuel for the drive");
            return false;
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line);
}).on('close', () => {
    const N = parseInt(inputLines[0]);
    const cars = {};

    for (let i = 1; i <= N; i++) {
        const [model, fuelStr, consumptionStr] = inputLines[i].split(' ');
        const fuelAmount = parseFloat(fuelStr);
        const fuelConsumptionPerKm = parseFloat(consumptionStr);
        if (!cars[model]) {
            cars[model] = new Car(model, fuelAmount, fuelConsumptionPerKm);
        }
    }

    let i = N + 1;
    while (i < inputLines.length && inputLines[i] !== 'End') {
        const parts = inputLines[i].split(' ');
        const carModel = parts[1];
        const amountOfKm = parseFloat(parts[2]);
        if (cars[carModel]) {
            cars[carModel].drive(amountOfKm);
        }
        i++;
    }

    Object.values(cars).forEach(car => {
        console.log(`${car.model} ${car.fuelAmount.toFixed(2)} ${car.traveledDistance}`);
    });
});
