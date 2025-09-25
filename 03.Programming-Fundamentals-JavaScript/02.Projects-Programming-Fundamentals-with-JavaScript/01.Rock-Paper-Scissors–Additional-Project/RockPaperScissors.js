const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let playerScore = 0;
let computerScore = 0;
let draws = 0;

function getPlayerMove() {
    let input = prompt("Choose [r]ock, [p]aper or [s]cissors:").toLowerCase();
    switch (input) {
        case "r":
        case "rock":
            return ROCK;
        case "p":
        case "paper":
            return PAPER;
        case "s":
        case "scissors":
            return SCISSORS;
        default:
            alert("Invalid input. Please try again...");
            return null;
    }
}

function getComputerMove() {
    const choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1: return ROCK;
        case 2: return PAPER;
        case 3: return SCISSORS;
    }
}

function determineWinner(player, computer) {
    if (player === computer) {
        draws++;
        return "draw";
    }

    if ((player === ROCK && computer === SCISSORS) ||
        (player === PAPER && computer === ROCK) ||
        (player === SCISSORS && computer === PAPER)) {
        playerScore++;
        return "win";
    }

    computerScore++;
    return "lose";
}

function displayResult(result) {
    switch (result) {
        case "win":
            alert("You win!");
            break;
        case "lose":
            alert("You lose!");
            break;
        case "draw":
            alert("It's a draw!");
            break;
    }
}

function printScore() {
    console.log("==== Score ====");
    console.log(`Player:   ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
    console.log(`Draws:    ${draws}`);
    console.log("==============\n");
}

while (true) {
    printScore();

    let playerMove = getPlayerMove();
    if (!playerMove) continue;

    let computerMove = getComputerMove();
    console.log(`Computer chose: ${computerMove}`);

    let result = determineWinner(playerMove, computerMove);
    displayResult(result);

    let answer = prompt("Do you want to play again? (y/n):").toLowerCase();
    if (answer !== "y" && answer !== "yes") {
        console.log("Thanks for playing!");
        break;
    }
}
