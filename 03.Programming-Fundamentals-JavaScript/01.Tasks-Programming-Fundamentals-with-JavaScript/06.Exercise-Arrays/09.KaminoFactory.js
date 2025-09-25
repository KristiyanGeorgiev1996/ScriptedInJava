let lengthOfDNA = parseInt(prompt());
let command = prompt();

let maxCountOfOnes = 0;
let bestDNA = new Array(lengthOfDNA).fill(0);
let bestSequenceIndex = 0;
let bestSequenceSum = 0;
let currentDNAs = 0;
let bestDNARow = 0;

while (command !== "Clone them!") {
    let currentArr = command
        .split('!')
        .filter(x => x !== '')
        .map(Number);

    let countOfOnes = 0;
    let currentMaxCountOfOnes = 0;
    let index = 0;
    let currentBestIndex = -1;

    for (let currentIndex = 0; currentIndex < currentArr.length; currentIndex++) {
        if (currentArr[currentIndex] === 1) {
            countOfOnes++;
            if (countOfOnes === 1) index = currentIndex;
        } else {
            if (countOfOnes > currentMaxCountOfOnes) {
                currentMaxCountOfOnes = countOfOnes;
                currentBestIndex = index;
            }
            countOfOnes = 0;
        }
    }

    // Check last sequence in case it ends at the array's end
    if (countOfOnes > currentMaxCountOfOnes) {
        currentMaxCountOfOnes = countOfOnes;
        currentBestIndex = index;
    }

    currentDNAs++;

    if (
        currentDNAs === 1 ||
        currentMaxCountOfOnes > maxCountOfOnes ||
        (currentMaxCountOfOnes === maxCountOfOnes && currentBestIndex < bestSequenceIndex) ||
        (currentMaxCountOfOnes === maxCountOfOnes && currentBestIndex === bestSequenceIndex && currentArr.reduce((a,b)=>a+b,0) > bestSequenceSum)
    ) {
        maxCountOfOnes = currentMaxCountOfOnes;
        bestSequenceIndex = currentBestIndex;
        bestSequenceSum = currentArr.reduce((a,b)=>a+b,0);
        bestDNARow = currentDNAs;
        bestDNA = currentArr;
    }

    command = prompt();
}

console.log(`Best DNA sample ${bestDNARow} with sum: ${bestSequenceSum}.`);
console.log(bestDNA.join(' '));
