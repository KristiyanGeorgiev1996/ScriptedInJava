let n = parseInt(prompt());
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < n; i++) {
    let currentNum = parseInt(prompt());
    if (i % 2 === 0) {
        evenSum += currentNum;
    } else {
        oddSum += currentNum;
    }
}

if (oddSum === evenSum) {
    console.log("Yes");
    console.log(`Sum = ${evenSum}`);
} else {
    let diff = Math.abs(evenSum - oddSum);
    console.log("No");
    console.log(`Diff = ${diff}`);
}
