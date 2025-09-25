let input = prompt();

function MiddleCharacter(input) {
    if (input.length % 2 === 0) {
        let middleCharacter1 = input[(input.length / 2) - 1];
        let middleCharacter2 = input[input.length / 2];
        console.log(middleCharacter1 + middleCharacter2);
    } else {
        let middleCharacter = input[Math.floor(input.length / 2)];
        console.log(middleCharacter);
    }
}

MiddleCharacter(input);
