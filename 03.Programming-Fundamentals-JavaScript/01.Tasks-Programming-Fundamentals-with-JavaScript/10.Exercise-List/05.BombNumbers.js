let numList = prompt().split(" ").map(Number);
let bombArr = prompt().split(" ").map(Number);

let itemToKill = bombArr[0];
let rangeToKill = bombArr[1];

while (numList.includes(itemToKill)) {
    let index = numList.indexOf(itemToKill);

    let leftRange = rangeToKill;
    let rightRange = rangeToKill;

    if (index - leftRange < 0) {
        leftRange = index;
    }

    if (index + rightRange >= numList.length) {
        rightRange = numList.length - index - 1;
    }

    numList.splice(index - leftRange, leftRange + rightRange + 1);
}

let sum = numList.reduce((acc, val) => acc + val, 0);
console.log(sum);
