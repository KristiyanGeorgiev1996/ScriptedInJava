const readline = require('readline');

class Product {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Person {
    constructor(name, money) {
        this.name = name;
        this.money = money;
        this.bag = [];
    }

    buyProduct(product) {
        if (this.money >= product.cost) {
            this.bag.push(product);
            this.money -= product.cost;
            return true;
        }
        return false;
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
    const peopleInput = inputLines[0].split(';').filter(x => x);
    const people = {};
    peopleInput.forEach(personData => {
        const [name, moneyStr] = personData.split('=');
        people[name] = new Person(name, parseFloat(moneyStr));
    });

    const productsInput = inputLines[1].split(';').filter(x => x);
    const products = {};
    productsInput.forEach(productData => {
        const [name, costStr] = productData.split('=');
        products[name] = new Product(name, parseFloat(costStr));
    });

    for (let i = 2; i < inputLines.length; i++) {
        const command = inputLines[i];
        if (command === 'END') break;
        const [personName, productName] = command.split(' ');

        const person = people[personName];
        const product = products[productName];

        if (person && product) {
            if (person.buyProduct(product)) {
                console.log(`${personName} bought ${productName}`);
            } else {
                console.log(`${personName} can't afford ${productName}`);
            }
        }
    }

    Object.values(people).forEach(person => {
        if (person.bag.length === 0) {
            console.log(`${person.name} - Nothing bought`);
        } else {
            console.log(`${person.name} - ${person.bag.map(p => p.name).join(', ')}`);
        }
    });
});
