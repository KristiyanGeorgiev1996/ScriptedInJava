let numbersCount = parseInt(prompt());

let p1NumbersCount = 0;
let p2NumbersCount = 0;
let p3NumbersCount = 0;
let p4NumbersCount = 0;
let p5NumbersCount = 0;

for (let i = 1; i <= numbersCount; i++) {
    let currentNumber = parseInt(prompt());

    if (currentNumber < 200) {
        p1NumbersCount++;
    } else if (currentNumber >= 200 && currentNumber <= 399) {
        p2NumbersCount++;
    } else if (currentNumber >= 400 && currentNumber <= 599) {
        p3NumbersCount++;
    } else if (currentNumber >= 600 && currentNumber <= 799) {
        p4NumbersCount++;
    } else if (currentNumber >= 800) {
        p5NumbersCount++;
    }
}

let p1NumbersPercent = (p1NumbersCount / numbersCount) * 100;
let p2NumbersPercent = (p2NumbersCount / numbersCount) * 100;
let p3NumbersPercent = (p3NumbersCount / numbersCount) * 100;
let p4NumbersPercent = (p4NumbersCount / numbersCount) * 100;
let p5NumbersPercent = (p5NumbersCount / numbersCount) * 100;

console.log(`${p1NumbersPercent.toFixed(2)}%`);
console.log(`${p2NumbersPercent.toFixed(2)}%`);
console.log(`${p3NumbersPercent.toFixed(2)}%`);
console.log(`${p4NumbersPercent.toFixed(2)}%`);
console.log(`${p5NumbersPercent.toFixed(2)}%`);
