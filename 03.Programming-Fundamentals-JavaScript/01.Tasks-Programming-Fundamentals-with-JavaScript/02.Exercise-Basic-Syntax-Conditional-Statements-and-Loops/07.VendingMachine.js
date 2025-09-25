let coins = 0.0;
let command = prompt();

while (command !== "Start") {
    let coin = parseFloat(command);
    if (coin === 0.1 || coin === 0.2 || coin === 0.5 || coin === 1 || coin === 2) {
        coins += coin;
    } else {
        console.log(`Cannot accept ${coin}`);
    }
    command = prompt();
}

let product = prompt().toLowerCase();
while (product !== "end") {
    switch (product) {
        case "nuts":
            if (coins >= 2.0) {
                console.log(`Purchased ${product}`);
                coins -= 2.0;
            } else {
                console.log("Sorry, not enough money");
            }
            break;
        case "water":
            if (coins >= 0.7) {
                console.log(`Purchased ${product}`);
                coins -= 0.7;
            } else {
                console.log("Sorry, not enough money");
            }
            break;
        case "crisps":
            if (coins >= 1.5) {
                console.log(`Purchased ${product}`);
                coins -= 1.5;
            } else {
                console.log("Sorry, not enough money");
            }
            break;
        case "soda":
            if (coins >= 0.8) {
                console.log(`Purchased ${product}`);
                coins -= 0.8;
            } else {
                console.log("Sorry, not enough money");
            }
            break;
        case "coke":
            if (coins >= 1.0) {
                console.log(`Purchased ${product}`);
                coins -= 1.0;
            } else {
                console.log("Sorry, not enough money");
            }
            break;
        default:
            console.log("Invalid product");
            break;
    }
    product = prompt().toLowerCase();
}

console.log(`Change: ${coins.toFixed(2)}`);
