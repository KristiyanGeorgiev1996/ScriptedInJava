// Input
let budget = Number(prompt());
let season = prompt();
let fishersCount = Number(prompt());

// Calculations
let rent = 0;

if (season === "Spring") {
    rent = 3000;
} else if (season === "Summer" || season === "Autumn") {
    rent = 4200;
} else if (season === "Winter") {
    rent = 2600;
}

// Discounts
let bill = 0;

if (fishersCount <= 6) {
    bill = rent * 0.9; // 10% discount
} else if (fishersCount >= 7 && fishersCount <= 11) {
    bill = rent * 0.85; // 15% discount
} else if (fishersCount >= 12) {
    bill = rent * 0.75; // 25% discount
}

// Additional Discount
if (fishersCount % 2 === 0 && season !== "Autumn") {
    bill = bill * 0.95; // 5% discount
}

// Output
if (bill <= budget) {
    let remainingMoney = budget - bill;
    console.log(`Yes! You have ${remainingMoney.toFixed(2)} leva left.`);
} else {
    let neededMoney = bill - budget;
    console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
}
