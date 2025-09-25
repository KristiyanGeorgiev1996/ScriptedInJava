const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (someString) => {
    let digits = "";
    let letters = "";
    let cymbols = "";

    for (let i = 0; i < someString.length; i++) {
        if (/[a-zA-Z]/.test(someString[i])) {
            letters += someString[i];
        }
    }
    for (let i = 0; i < someString.length; i++) {
        if (/[0-9]/.test(someString[i])) {
            digits += someString[i];
        }
    }
    for (let i = 0; i < someString.length; i++) {
        if (!/[0-9a-zA-Z]/.test(someString[i])) {
            cymbols += someString[i];
        }
    }

    console.log(digits);
    console.log(letters);
    console.log(cymbols);
    rl.close();
});
