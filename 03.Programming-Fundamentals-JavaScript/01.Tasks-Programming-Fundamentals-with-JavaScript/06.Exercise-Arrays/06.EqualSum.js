let values = prompt().split(' ').map(Number);
let isFound = false;

for (let i = 0; i < values.length; i++) {
    let leftSum = 0;
    for (let k = 0; k < i; k++) leftSum += values[k];

    let rightSum = 0;
    for (let j = values.length - 1; j > i; j--) rightSum += values[j];

    if (leftSum === rightSum && !isFound) {
        console.log(i);
        isFound = true;
    }
}

if (!isFound) console.log("no");
