let excursionPrice = Number(prompt());
let puzzlesCount = Number(prompt());
let dollsCount = Number(prompt());
let bearsCount = Number(prompt());
let minionsCount = Number(prompt());
let trucksCount = Number(prompt());

let puzzlePrice = 2.60;
let dollPrice = 3;
let bearPrice = 4.10;
let minionPrice = 8.20;
let truckPrice = 2;

let toysBill = (puzzlePrice * puzzlesCount) + (dollPrice * dollsCount) + (bearPrice * bearsCount) + (minionPrice * minionsCount) + (truckPrice * trucksCount);
let toysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

if (toysCount >= 50) {
    toysBill *= 0.75;
}

let shopRent = toysBill * 0.1;
toysBill -= shopRent;

if (toysBill >= excursionPrice) {
    console.log(`Yes! ${(toysBill - excursionPrice).toFixed(2)} lv left.`);
} else {
    console.log(`Not enough money! ${(excursionPrice - toysBill).toFixed(2)} lv needed.`);
}
