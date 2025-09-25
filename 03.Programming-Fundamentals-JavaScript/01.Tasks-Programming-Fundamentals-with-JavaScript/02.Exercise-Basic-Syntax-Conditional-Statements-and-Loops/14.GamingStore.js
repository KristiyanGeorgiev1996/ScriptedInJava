let currentBalance = parseFloat(prompt());
let currentBalance1 = currentBalance;

while (currentBalance1 !== 0) {
    let game = prompt();
    if (game === "Game Time") {
        break;
    }

    if (game === "OutFall 4" || game === "RoverWatch Origins Edition") {
        if (currentBalance1 < 39.99) {
            console.log("Too Expensive");
        } else {
            console.log(`Bought ${game}`);
            currentBalance1 -= 39.99;
        }
    } else if (game === "CS: OG") {
        if (currentBalance1 < 15.99) {
            console.log("Too Expensive");
        } else {
            console.log(`Bought ${game}`);
            currentBalance1 -= 15.99;
        }
    } else if (game === "Zplinter Zell") {
        if (currentBalance1 < 19.99) {
            console.log("Too Expensive");
        } else {
            console.log(`Bought ${game}`);
            currentBalance1 -= 19.99;
        }
    } else if (game === "Honored 2") {
        if (currentBalance1 < 59.99) {
            console.log("Too Expensive");
        } else {
            console.log(`Bought ${game}`);
            currentBalance1 -= 59.99;
        }
    } else if (game === "RoverWatch") {
        if (currentBalance1 < 29.99) {
            console.log("Too Expensive");
        } else {
            console.log(`Bought ${game}`);
            currentBalance1 -= 29.99;
        }
    } else {
        console.log("Not Found");
    }

    if (currentBalance1 === 0) {
        console.log("Out of money!");
        break;
    }
}

let spent = currentBalance - currentBalance1;
console.log(`Total spent: $${spent.toFixed(2)}. Remaining: $${currentBalance1.toFixed(2)}`);
