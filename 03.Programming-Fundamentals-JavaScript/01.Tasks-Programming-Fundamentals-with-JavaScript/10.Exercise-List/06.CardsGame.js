let firstHand = prompt().split(" ").map(Number);
let secondHand = prompt().split(" ").map(Number);

while (firstHand.length > 0 && secondHand.length > 0) {
    let firstCard = firstHand[0];
    let secondCard = secondHand[0];

    firstHand.shift();
    secondHand.shift();

    if (firstCard > secondCard) {
        firstHand.push(firstCard, secondCard);
    } else if (secondCard > firstCard) {
        secondHand.push(secondCard, firstCard);
    }
}

if (firstHand.length > 0) {
    let sum = firstHand.reduce((acc, val) => acc + val, 0);
    console.log(`First player wins! Sum: ${sum}`);
} else {
    let sum = secondHand.reduce((acc, val) => acc + val, 0);
    console.log(`Second player wins! Sum: ${sum}`);
}
