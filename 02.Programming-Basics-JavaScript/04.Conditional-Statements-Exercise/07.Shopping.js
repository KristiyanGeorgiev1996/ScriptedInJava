// Input
let budget = Number(prompt("Enter budget:"));
let videocardsCount = Number(prompt("Enter number of videocards:"));
let processorsCount = Number(prompt("Enter number of processors:"));
let ramsCount = Number(prompt("Enter number of RAMs:"));

// Prices Calculation
let videocardsBill = videocardsCount * 250;
let processorsBill = processorsCount * (videocardsBill * 0.35);
let ramsBill = ramsCount * (videocardsBill * 0.1);

let bill = videocardsBill + processorsBill + ramsBill;

// Discount
if (videocardsCount > processorsCount) {
    bill = bill - (bill * 0.15);
}

// Output
if (bill <= budget) {
    let moneyLeft = budget - bill;
    console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
} else {
    let neededMoney = bill - budget;
    console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`);
}
