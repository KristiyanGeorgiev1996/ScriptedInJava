let n = parseInt(prompt());

let sum = 0;
let maxNumber = Number.MIN_SAFE_INTEGER;

for (let i = 1; i <= n; i++) {
    let currrentNumber = parseInt(prompt());
    sum += currrentNumber;

    if (maxNumber < currrentNumber) {
        maxNumber = currrentNumber;
    }
}

let sumWithoutMaxNumber = sum - maxNumber;

if (maxNumber === sumWithoutMaxNumber) {
    console.log("Yes");
    console.log(`Sum = ${maxNumber}`);
} else {
    let difference = Math.abs(maxNumber - sumWithoutMaxNumber);
    console.log("No");
    console.log(`Diff = ${difference}`);
}
