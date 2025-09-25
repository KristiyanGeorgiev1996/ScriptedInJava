const readline = require('readline');

class Engine {
    constructor(speed, power) {
        this.speed = speed;
        this.power = power;
    }
}

class Cargo {
    constructor(weight, type) {
        this.weight = weight;
        this.type = type;
    }
}

class Car {
    constructor(model, engineSpeed, enginePower, cargoWeight, cargoType) {
        this.model = model;
        this.engine = new Engine(engineSpeed, enginePower);
        this.cargo = new Cargo(cargoWeight, cargoType);
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
    const n = parseInt(inputLines[0]);
    const cars = [];

    for (let i = 1; i <= n; i++) {
        const carInfo = inputLines[i].split(' ');
        const model = carInfo[0];
        const engineSpeed = parseInt(carInfo[1]);
        const enginePower = parseInt(carInfo[2]);
        const cargoWeight = parseInt(carInfo[3]);
        const cargoType = carInfo[4];
        cars.push(new Car(model, engineSpeed, enginePower, cargoWeight, cargoType));
    }

    const command = inputLines[n + 1];
    if (command === 'fragile') {
        cars.forEach(car => {
            if (car.cargo.type === 'fragile' && car.cargo.weight < 1000) {
                console.log(car.model);
            }
        });
    } else if (command === 'flamable') {
        cars.forEach(car => {
            if (car.cargo.type === 'flamable' && car.engine.power > 250) {
                console.log(car.model);
            }
        });
    }
});
