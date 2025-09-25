let n = parseInt(prompt());
let sum = 0;

while (n !== 0) {
    let letter = prompt();
    let intOfLetter = letter.charCodeAt(0);
    sum += intOfLetter;
    n--;
}

console.log(`The sum equals: ${sum}`);
