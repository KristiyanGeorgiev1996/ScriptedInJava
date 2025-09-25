let inputOne = prompt().split(' ').map(Number);
let inputTwo = prompt().split(' ').map(Number);

let rule = [];
let maxList = [];
let mixedList = [];

if (inputOne.length > inputTwo.length) {
    maxList = inputOne.slice();
} else {
    maxList = inputTwo.slice().reverse();
}

rule.push(maxList[maxList.length - 2]);
rule.push(maxList[maxList.length - 1]);
rule.sort((a, b) => a - b);

if (inputOne.length > inputTwo.length) {
    inputOne.splice(inputOne.length - 2, 2);
    inputTwo.reverse();
} else {
    inputTwo.splice(inputTwo.length - 2, 2);
    inputTwo.reverse();
}

for (let i = 0; i < inputOne.length; i++) {
    mixedList.push(inputOne[i]);
    mixedList.push(inputTwo[i]);
}

let output = mixedList.filter(x => x > rule[0] && x < rule[1]);
output.sort((a, b) => a - b);

console.log(output.join(' '));
