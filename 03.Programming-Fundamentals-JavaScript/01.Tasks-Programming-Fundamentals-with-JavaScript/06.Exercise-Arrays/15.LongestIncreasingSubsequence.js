let sequence = prompt().split(" ").map(Number);

let len = new Array(sequence.length).fill(1);
let prev = new Array(sequence.length).fill(-1);
let maxLength = 0;
let lastIndex = -1;

for (let i = 0; i < sequence.length; i++) {
    for (let j = 0; j < i; j++) {
        if (sequence[j] < sequence[i] && len[j] >= len[i]) {
            len[i] = len[j] + 1;
            prev[i] = j;
        }
    }
    if (len[i] > maxLength) {
        maxLength = len[i];
        lastIndex = i;
    }
}

let lis = [];
while (lastIndex !== -1) {
    lis.push(sequence[lastIndex]);
    lastIndex = prev[lastIndex];
}
lis.reverse();
console.log(lis.join(" "));
