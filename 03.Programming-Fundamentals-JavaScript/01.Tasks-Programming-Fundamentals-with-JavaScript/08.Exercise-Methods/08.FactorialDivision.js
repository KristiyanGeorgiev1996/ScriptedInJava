let n = Number(prompt());
let x = Number(prompt());

let factN = 1;
let factX = 1;

for (let i = 1; i <= n; i++) {
    factN *= i;
}
for (let i = 1; i <= x; i++) {
    factX *= i;
}

let divide = factN / factX;
console.log(divide.toFixed(2));
