let symbols = prompt().split(' ');

let bestCount = 0;
let bestSymbol = "";

for (let i = symbols.length - 1; i >= 0; i--) {
    let count = 1;
    for (let j = i - 1; j >= 0; j--) {
        if (symbols[i] === symbols[j]) {
            count++;
            if (bestCount <= count) {
                bestCount = count;
                bestSymbol = symbols[i];
            }
        } else {
            break;
        }
    }
}

console.log(Array(bestCount).fill(bestSymbol).join(' '));
