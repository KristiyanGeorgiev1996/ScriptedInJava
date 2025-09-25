let moneyForTrip = parseFloat(prompt());
let savedMoney = parseFloat(prompt());

let allDaysCounter = 0;
let spendDaysCounter = 0;

while (savedMoney < moneyForTrip) {
    let whatJessyDo = prompt();
    let currentMoney = parseFloat(prompt());

    allDaysCounter++;

    if (whatJessyDo === "spend") {
        spendDaysCounter++;
        savedMoney -= currentMoney;

        if (savedMoney < 0) savedMoney = 0;

        if (spendDaysCounter === 5) {
            console.log("You can't save the money.");
            console.log(`${allDaysCounter}`);
            break;
        }
    } else if (whatJessyDo === "save") {
        spendDaysCounter = 0;
        savedMoney += currentMoney;
    }
}

if (savedMoney >= moneyForTrip) {
    console.log(`You saved the money for ${allDaysCounter} days.`);
}
