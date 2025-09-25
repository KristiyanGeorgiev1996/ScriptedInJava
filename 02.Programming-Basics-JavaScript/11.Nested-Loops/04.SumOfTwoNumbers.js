let startNum = parseInt(prompt());
let endNum = parseInt(prompt());
let magicNumber = parseInt(prompt());

let counter = 0;
let isFound = false;

for (let i = startNum; i <= endNum; i++) {
    for (let j = startNum; j <= endNum; j++) {
        counter++;

        if (i + j === magicNumber) {
            console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
            isFound = true;
            break;
        }
    }

    if (isFound)
        break;
}

if (!isFound) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
}
