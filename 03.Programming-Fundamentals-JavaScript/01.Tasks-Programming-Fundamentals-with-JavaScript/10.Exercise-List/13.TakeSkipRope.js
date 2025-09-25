let word = prompt();

let numbers = [];
let takeList = [];
let skipList = [];
let nonNumbers = [];
let result = "";

for (let i = 0; i < word.length; i++) {
    if (!isNaN(Number(word[i]))) {
        numbers.push(Number(word[i]));
    } else {
        nonNumbers.push(word[i]);
    }
}

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
        takeList.push(numbers[i]);
    } else {
        skipList.push(numbers[i]);
    }
}

let indexForSkip = 0;

for (let i = 0; i < takeList.length; i++) {
    let temp = nonNumbers.slice(indexForSkip, indexForSkip + takeList[i]);
    result += temp.join("");
    indexForSkip += takeList[i] + skipList[i];
}

console.log(result);
