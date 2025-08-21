// Input
let movieBudget = Number(prompt("Enter movie budget:"));
let backgroundActorsCount = Number(prompt("Enter number of background actors:"));
let backgroundActorClothingPrice = Number(prompt("Enter clothing price per actor:"));

// Calculations
let decorPrice = movieBudget * 0.1;
let backgroundActorsClothingSum = backgroundActorsCount * backgroundActorClothingPrice;

if (backgroundActorsCount > 150) {
    backgroundActorsClothingSum *= 0.9;
}

let totalCost = decorPrice + backgroundActorsClothingSum;

// Output
if (totalCost > movieBudget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${(totalCost - movieBudget).toFixed(2)} leva more.`);
} else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${(movieBudget - totalCost).toFixed(2)} leva left.`);
}
