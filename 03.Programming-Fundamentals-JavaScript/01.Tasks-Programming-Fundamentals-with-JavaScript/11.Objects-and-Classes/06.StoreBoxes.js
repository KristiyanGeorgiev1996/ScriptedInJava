const readline = require('readline');

class Box {
    constructor() {
        this.serialNumber = '';
        this.item = '';
        this.quantity = 0;
        this.priceBox = 0;
        this.totalPrice = 0;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let boxes = [];
let inputLines = [];

rl.on('line', (line) => {
    if (line === 'end') {
        const sortedBox = boxes.sort((a, b) => b.totalPrice - a.totalPrice);
        sortedBox.forEach(box => {
            console.log(box.serialNumber);
            console.log(`-- ${box.item} - $${box.priceBox.toFixed(2)}: ${box.quantity}`);
            console.log(`-- $${box.totalPrice.toFixed(2)}`);
        });
        rl.close();
    } else {
        const data = line.split(' ');
        const serialNumber = data[0];
        const itemName = data[1];
        const itemQuantity = parseInt(data[2]);
        const itemPrice = parseFloat(data[3]);

        const box = new Box();
        box.serialNumber = serialNumber;
        box.item = itemName;
        box.quantity = itemQuantity;
        box.priceBox = itemPrice;
        box.totalPrice = itemQuantity * itemPrice;

        boxes.push(box);
    }
});
