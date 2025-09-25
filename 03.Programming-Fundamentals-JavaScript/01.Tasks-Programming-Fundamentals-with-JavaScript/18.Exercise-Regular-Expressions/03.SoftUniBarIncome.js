class Order {
    constructor(customer, product, count, price) {
        this.customer = customer;
        this.product = product;
        this.count = count;
        this.price = price;
    }

    get totalPrice() {
        return this.count * this.price;
    }
}

const ordersInput = [
    "%George%<Pizza>|2|10.50$",
    "%Peter%<Burger>|1|5.00$",
    "end of shift"
];

let totalIncome = 0;
const pattern = /%([A-Z][a-z]+)%[^|$%.]*<(\w+)>[^|$%.]*\|(\d+)\|[^|$%.]*?(\d+(?:\.\d+)?)\$/;

for (let command of ordersInput) {
    if (command === "end of shift") break;

    const match = command.match(pattern);
    if (!match) continue;

    const order = new Order(match[1], match[2], Number(match[3]), Number(match[4]));
    totalIncome += order.totalPrice;
    console.log(`${order.customer}: ${order.product} - ${order.totalPrice.toFixed(2)}`);
}

console.log(`Total income: ${totalIncome.toFixed(2)}`);
