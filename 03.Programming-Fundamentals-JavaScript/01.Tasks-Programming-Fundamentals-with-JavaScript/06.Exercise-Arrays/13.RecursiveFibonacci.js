let positionInFibonacciSequence = parseInt(prompt());
let fibonacciSequence = new Array(50).fill(0);

fibonacciSequence[0] = 1;
fibonacciSequence[1] = 1;

if (positionInFibonacciSequence > 2) {
    for (let i = 2; i < positionInFibonacciSequence; i++) {
        fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    }
}

console.log(fibonacciSequence[positionInFibonacciSequence - 1]);
