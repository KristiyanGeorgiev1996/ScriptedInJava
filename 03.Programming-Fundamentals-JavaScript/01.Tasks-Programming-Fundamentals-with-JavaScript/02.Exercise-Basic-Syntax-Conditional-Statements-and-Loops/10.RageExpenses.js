let lostGames = parseInt(prompt());
let priceOfSlushalki = parseFloat(prompt());
let priceOfMouse = parseFloat(prompt());
let priceOfKlaviatura = parseFloat(prompt());
let priceOfDisplay = parseFloat(prompt());

let allSumForNew = 0;

if (lostGames >= 2) {
    let breakSlushalki = Math.floor(lostGames / 2);
    allSumForNew += breakSlushalki * priceOfSlushalki;
}
if (lostGames >= 3) {
    let breakMouses = Math.floor(lostGames / 3);
    allSumForNew += breakMouses * priceOfMouse;
}
if (lostGames >= 6) {
    let breakKlaviatura = Math.floor(lostGames / 6);
    allSumForNew += breakKlaviatura * priceOfKlaviatura;
}
if (lostGames >= 12) {
    let breakDisplay = Math.floor(lostGames / 12);
    allSumForNew += breakDisplay * priceOfDisplay;
}

console.log(`Rage expenses: ${allSumForNew.toFixed(2)} lv.`);
