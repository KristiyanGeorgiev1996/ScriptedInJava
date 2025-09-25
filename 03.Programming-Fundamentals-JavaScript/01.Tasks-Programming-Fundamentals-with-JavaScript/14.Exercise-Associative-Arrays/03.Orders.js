const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line);
}).on('close', () => {
    const price = {};

    for (let command of inputLines) {
        if (command === 'buy') break;
        const [productName, priceStr, quantityStr] = command.split(' ');
        const cena = parseFloat(priceStr);
        const kolichestvo = parseFloat(quantityStr);

        if (!price[productName]) {
            price[productName] = { price: cena, quantity: kolichestvo };
        } else {
            price[productName].quantity += kolichestvo;
            price[productName].price = cena;
        }
    }

    Object.keys(price).forEach(product => {
        const totalValue = price[product].price * price[product].quantity;
        console.log(`${product} -> ${totalValue.toFixed(2)}`);
    });
});
