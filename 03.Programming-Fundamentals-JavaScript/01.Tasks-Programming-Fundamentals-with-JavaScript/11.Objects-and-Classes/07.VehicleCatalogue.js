const readline = require('readline');

class Car {
    constructor() {
        this.brand = '';
        this.model = '';
        this.horsePower = '';
    }
}

class Truck {
    constructor() {
        this.brand = '';
        this.model = '';
        this.weight = '';
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cars = [];
let trucks = [];

rl.on('line', (line) => {
    if (line === 'end') {
        const sortedCars = cars.sort((a, b) => a.brand.localeCompare(b.brand));
        const sortedTrucks = trucks.sort((a, b) => a.brand.localeCompare(b.brand));

        if (sortedCars.length > 0) {
            console.log('Cars:');
            sortedCars.forEach(car => {
                console.log(`${car.brand}: ${car.model} - ${car.horsePower}hp`);
            });
        }

        if (sortedTrucks.length > 0) {
            console.log('Trucks:');
            sortedTrucks.forEach(truck => {
                console.log(`${truck.brand}: ${truck.model} - ${truck.weight}kg`);
            });
        }

        rl.close();
    } else {
        const commandArray = line.split('/');
        if (commandArray[0] === 'Car') {
            const car = new Car();
            car.brand = commandArray[1];
            car.model = commandArray[2];
            car.horsePower = commandArray[3];
            cars.push(car);
        } else if (commandArray[0] === 'Truck') {
            const truck = new Truck();
            truck.brand = commandArray[1];
            truck.model = commandArray[2];
            truck.weight = commandArray[3];
            trucks.push(truck);
        }
    }
});
