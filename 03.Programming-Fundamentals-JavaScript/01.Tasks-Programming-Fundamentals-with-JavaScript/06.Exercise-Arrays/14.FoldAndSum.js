let initArr = prompt().split(" ").map(Number);

let leftFoldIndex = initArr.length / 4 - 1;
let rightFoldIndex = (3 * initArr.length) / 4;

let topArr = new Array(initArr.length / 2);
let howManyNumbersSoFar = 0;

for (let i = leftFoldIndex; i >= 0; i--) {
    topArr[leftFoldIndex - i] = initArr[i];
    howManyNumbersSoFar++;
}
for (let i = initArr.length - 1; i >= rightFoldIndex; i--) {
    topArr[initArr.length - 1 - i + howManyNumbersSoFar] = initArr[i];
}

let bottomArr = new Array(initArr.length / 2);
for (let i = leftFoldIndex + 1; i < rightFoldIndex; i++) {
    bottomArr[i - howManyNumbersSoFar] = initArr[i];
}

let result = [];
for (let i = 0; i < topArr.length; i++) {
    result.push(topArr[i] + bottomArr[i]);
}

console.log(result.join(" "));
