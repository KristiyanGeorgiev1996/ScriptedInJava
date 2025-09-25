let playAgain = true;
let level = 1;
let min = 1;
let max = 100;

while (playAgain) {
    console.clear();
    console.log(`Welcome to Guess the Number - Level ${level} (${min} - ${max})`);

    const secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let attempts = 0;

    while (true) {
        let input = prompt(`Enter your guess (${min} - ${max}):`);
        let guess = Number(input);
        attempts++;

        if (isNaN(guess)) {
            alert("Invalid input. Please enter a valid number.");
            continue;
        }

        if (guess < min || guess > max) {
            alert("Number out of range.");
            continue;
        }

        if (guess === secretNumber) {
            alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
            break;
        } else if (guess < secretNumber) {
            alert("Try a higher number.");
        } else {
            alert("Try a lower number.");
        }
    }

    let answer = prompt("Do you want to play again? (y/n):").toLowerCase();
    if (answer !== "y" && answer !== "yes") {
        console.log("Thanks for playing!");
        playAgain = false;
    } else {
        level++;
        max += 100;
    }
}
