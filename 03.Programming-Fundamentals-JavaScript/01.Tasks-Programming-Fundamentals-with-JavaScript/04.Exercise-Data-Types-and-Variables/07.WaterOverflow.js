let n = parseInt(prompt());
let allLiters = 0;

for (let i = 1; i <= n; i++) {
    let liters = parseInt(prompt());
    if (liters > 255) {
        console.log("Insufficient capacity!");
    } else if (liters + allLiters <= 255) {
        allLiters += liters;
    } else if (liters + allLiters > 255) {
        console.log("Insufficient capacity!");
    }
}
console.log(allLiters);
