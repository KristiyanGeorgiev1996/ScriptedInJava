let text = prompt();
let sum = 0;

while (text.length !== 0) {
    let lastCharacter = text[text.length - 1];
    if ("AaEeIiOoUu".includes(lastCharacter)) {
        sum++;
    }
    text = text.slice(0, -1);
}

console.log(sum);
