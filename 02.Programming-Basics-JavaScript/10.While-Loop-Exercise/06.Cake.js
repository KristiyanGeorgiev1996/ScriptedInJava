let width = parseInt(prompt());
let length = parseInt(prompt());

let cakePieces = width * length;

while (true) {
    let input = prompt();

    if (input === "STOP")
        break;

    let currentPieces = parseInt(input);
    cakePieces -= currentPieces;

    if (cakePieces < 0)
        break;
}

if (cakePieces >= 0) {
    console.log(`${cakePieces} pieces are left.`);
} else {
    console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
}
