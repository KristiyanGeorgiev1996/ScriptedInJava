let n = parseInt(prompt());

let maxNumber = Number.MIN_SAFE_INTEGER;
let minNumber = Number.MAX_SAFE_INTEGER;

for (let i = 1; i <= n; i++) {
    let currentNum = parseInt(prompt());

    if (currentNum > maxNumber) {
        maxNumber = currentNum;
    }
    if (currentNum < minNumber) {
        minNumber = currentNum;
    }
}

console.log(`Max number: ${maxNumber}`);
console.log(`Min number: ${minNumber}`);
