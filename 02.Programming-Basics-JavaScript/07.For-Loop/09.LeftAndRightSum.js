let n = parseInt(prompt());

let leftSum = 0;
let rightSum = 0;

for (let i = 0; i < n; i++) {
    let currNum = parseInt(prompt());
    leftSum += currNum;
}

for (let i = 0; i < n; i++) {
    let currNum = parseInt(prompt());
    rightSum += currNum;
}

if (leftSum === rightSum) {
    console.log(`Yes, sum = ${leftSum}`);
} else {
    console.log(`No, diff = ${Math.abs(leftSum - rightSum)}`);
}
