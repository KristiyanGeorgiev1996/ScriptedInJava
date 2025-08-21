let deposit = Number(prompt());
let monthsTerm = Number(prompt());
let yearPercent = Number(prompt()) / 100;

let sum = deposit + monthsTerm * ((deposit * yearPercent) / 12);
console.log(sum);
