const readline = require('readline');

class Vehicle {
    constructor(type, model, color, horsepower) {
        this.type = type;
        this.model = model;
        this.color = color;
        this.horsepower = horsepower;
    }
}

function calculateAverageHorsepower(vehicles) {
    if (vehicles.length === 0) return 0;
    const totalHorsepower = vehicles.reduce((sum, v) => sum + v.horsepower, 0);
    return totalHorsepower / vehicles.length;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let vehicles = [];
let inputLines = [];

rl.on('line', (line) => {
    inputLines.push(line);
}).on('close', () => {
    let i = 0;
    while (inputLines[i] !== 'End') {
        const vehicleData = inputLines[i].split(' ');
        const type = vehicleData[0];
        const model = vehicleData[1];
        const color = vehicleData[2];
        const horsepower = parseInt(vehicleData[3]);
        vehicles.push(new Vehicle(type, model, color, horsepower));
        i++;
    }

    i++;
    const requestedModels = [];
    while (i < inputLines.length && inputLines[i] !== 'Close the Catalogue') {
        requestedModels.push(inputLines[i]);
        i++;
    }

    const requestedVehicles = vehicles.filter(v => requestedModels.includes(v.model));
    const cars = requestedVehicles.filter(v => v.type === 'car').sort((a, b) => a.horsepower - b.horsepower);
    const trucks = requestedVehicles.filter(v => v.type === 'truck').sort((a, b) => a.horsepower - b.horsepower);

    cars.forEach(car => {
        console.log(`Type: Car`);
        console.log(`Model: ${car.model}`);
        console.log(`Color: ${car.color}`);
        console.log(`Horsepower: ${car.horsepower}`);
    });

    trucks.forEach(truck => {
        console.log(`Type: Truck`);
        console.log(`Model: ${truck.model}`);
        console.log(`Color: ${truck.color}`);
        console.log(`Horsepower: ${truck.horsepower}`);
    });

    const allCars = vehicles.filter(v => v.type === 'car');
    const allTrucks = vehicles.filter(v => v.type === 'truck');

    const averageCarsHorsepower = calculateAverageHorsepower(allCars);
    const averageTrucksHorsepower = calculateAverageHorsepower(allTrucks);

    console.log(`Cars have average horsepower of: ${averageCarsHorsepower.toFixed(2)}.`);
    console.log(`Trucks have average horsepower of: ${averageTrucksHorsepower.toFixed(2)}.`);
});
