let countKegs = parseInt(prompt());

let biggestModelName = "";
let biggestKegObem = 0;

for (let i = 1; i <= countKegs; i++) {
    let model = prompt();
    let radius = parseFloat(prompt());
    let high = parseInt(prompt());

    let volume = Math.PI * Math.pow(radius, 2) * high;
    if (biggestKegObem < volume) {
        biggestKegObem = volume;
        biggestModelName = model;
    }
}
console.log(biggestModelName);
