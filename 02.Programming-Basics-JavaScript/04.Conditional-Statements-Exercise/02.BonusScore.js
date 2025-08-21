let number = Number(prompt());

let bonusPoints = 0;

if (number <= 100) {
    bonusPoints = 5;
} else if (number > 100 && number <= 1000) {
    bonusPoints = number * 0.2;
} else if (number > 1000) {
    bonusPoints = number * 0.1;
}

let additionalBonusPoints = 0;

if (number % 2 === 0) {
    additionalBonusPoints++;
} else if (number % 10 === 5) {
    additionalBonusPoints += 2;
}

console.log(bonusPoints + additionalBonusPoints);
console.log(number + bonusPoints + additionalBonusPoints);
