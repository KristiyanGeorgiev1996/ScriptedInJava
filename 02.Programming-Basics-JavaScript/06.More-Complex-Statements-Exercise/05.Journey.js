// Input
let budget = Number(prompt());
let season = prompt();

// Calculations
let destination = "";
let place = "";
let spentMoney = 0;

if (budget <= 100) {
    destination = "Bulgaria";

    if (season === "summer") {
        place = "Camp";
        spentMoney = budget * 0.3;
    } else if (season === "winter") {
        place = "Hotel";
        spentMoney = budget * 0.7;
    }
} else if (budget <= 1000) {
    destination = "Balkans";

    if (season === "summer") {
        place = "Camp";
        spentMoney = budget * 0.4;
    } else if (season === "winter") {
        place = "Hotel";
        spentMoney = budget * 0.8;
    }
} else if (budget > 1000) {
    destination = "Europe";
    place = "Hotel";
    spentMoney = budget * 0.9;
}

// Output
console.log(`Somewhere in ${destination}`);
console.log(`${place} - ${spentMoney.toFixed(2)}`);
