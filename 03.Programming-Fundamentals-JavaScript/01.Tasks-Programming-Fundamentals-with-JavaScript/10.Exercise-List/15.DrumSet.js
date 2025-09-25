let budget = Number(prompt());

let drums = prompt().split(' ').map(Number);
let price = [...drums];

while (true) {
    let command = prompt();
    if (command === "Hit it again, Gabsy!") break;

    let hit = Number(command);

    for (let i = 0; i < drums.length; i++) {
        drums[i] -= hit;

        if (drums[i] <= 0) {
            if (budget - price[i] * 3 >= 0) {
                budget -= price[i] * 3;
                drums[i] = price[i];
            }
        }
    }

    for (let i = drums.length - 1; i >= 0; i--) {
        if (drums[i] <= 0) {
            drums.splice(i, 1);
            price.splice(i, 1);
        }
    }
}

console.log(drums.join(' '));
console.log(`Gabsy has ${budget.toFixed(2)}lv.`);
