class Furniture {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    get total() {
        return this.price * this.quantity;
    }
}

const furnitures = [];
const pattern = />>([A-Za-z]+)<<(\d+(\.\d+)?)!(\d+)/g;

let input = [
    ">>Chair<<412.23!3",
    ">>Sofa<<500!5",
    ">>Recliner<<<<!5",
    ">>Bench<<230!10",
    ">>>>>>Rocking chair<<!5",
    ">>Bed<<700!5",
    "Purchase"
];

for (let line of input) {
    if (line === "Purchase") break;
    let match;
    while ((match = pattern.exec(line)) !== null) {
        const name = match[1];
        const price = parseFloat(match[2]);
        const quantity = parseInt(match[4]);
        furnitures.push(new Furniture(name, price, quantity));
    }
}

console.log("Bought furniture:");
let totalSpend = 0;
for (let f of furnitures) {
    console.log(f.name);
    totalSpend += f.total;
}
console.log(`Total money spend: ${totalSpend.toFixed(2)}`);
