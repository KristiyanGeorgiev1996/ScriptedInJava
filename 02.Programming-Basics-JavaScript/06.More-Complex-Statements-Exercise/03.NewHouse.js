// Input
let typeFlowers = prompt();
let flowersCount = Number(prompt());
let budget = Number(prompt());

// Prices
let rosePrice = 5;
let dahliaPrice = 3.80;
let tulipPrice = 2.80;
let narcissPrice = 3;
let gladiolaPrice = 2.50;

// Calculations
let bill = 0;

if (typeFlowers === "Roses") {
    bill = flowersCount * rosePrice;

    if (flowersCount > 80) {
        bill = bill * 0.9; // 10% discount
    }
} else if (typeFlowers === "Dahlias") {
    bill = flowersCount * dahliaPrice;

    if (flowersCount > 90) {
        bill = bill * 0.85; // 15% discount
    }
} else if (typeFlowers === "Tulips") {
    bill = flowersCount * tulipPrice;

    if (flowersCount > 80) {
        bill = bill * 0.85; // 15% discount
    }
} else if (typeFlowers === "Narcissus") {
    bill = flowersCount * narcissPrice;

    if (flowersCount < 120) {
        bill = bill * 1.15; // 15% price up
    }
} else if (typeFlowers === "Gladiolus") {
    bill = flowersCount * gladiolaPrice;

    if (flowersCount < 80) {
        bill = bill * 1.2; // 20% price up
    }
}

// Output
if (bill <= budget) {
    let remainingMoney = budget - bill;
    console.log(`Hey, you have a great garden with ${flowersCount} ${typeFlowers} and ${remainingMoney.toFixed(2)} leva left.`);
} else {
    let neededMoney = bill - budget;
    console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
}
