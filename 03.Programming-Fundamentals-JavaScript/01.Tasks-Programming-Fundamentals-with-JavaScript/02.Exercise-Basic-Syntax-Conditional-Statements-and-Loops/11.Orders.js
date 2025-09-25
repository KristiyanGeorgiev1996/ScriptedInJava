let poruhki = parseFloat(prompt());
let allSum = 0;

for (let i = 0; i < poruhki; i++) {
    let priceforCapsule = parseFloat(prompt());
    let days = parseFloat(prompt());
    let capsuleCount = parseFloat(prompt());

    let totalSum = (days * capsuleCount) * priceforCapsule;
    allSum += totalSum;
    console.log(`The price for the coffee is: $${totalSum.toFixed(2)}`);
}

console.log(`Total: $${allSum.toFixed(2)}`);
