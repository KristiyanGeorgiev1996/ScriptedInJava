const readline = require('readline');

function factorial(n) {
    let result = 1n;
    for (let i = 2n; i <= BigInt(n); i++) {
        result *= i;
    }
    return result;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (answer) => {
    const N = parseInt(answer);
    console.log(factorial(N).toString());
    rl.close();
});
