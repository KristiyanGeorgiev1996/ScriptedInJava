let age = parseInt(prompt());
let washingmachinePrice = parseFloat(prompt());
let toyPrice = parseInt(prompt());

let toysCount = 0;
let money = 0;
let moneyIntake = 0;

for (let i = 1; i <= age; i++) {
    if (i % 2 === 1) {
        toysCount++;
    } else {
        moneyIntake += 10;
        money += moneyIntake;
        money--;
    }
}

money += toysCount * toyPrice;

if (money >= washingmachinePrice) {
    let remainingMoney = money - washingmachinePrice;
    console.log(`Yes! ${remainingMoney.toFixed(2)}`);
} else {
    let moneyLeft = washingmachinePrice - money;
    console.log(`No! ${moneyLeft.toFixed(2)}`);
}
