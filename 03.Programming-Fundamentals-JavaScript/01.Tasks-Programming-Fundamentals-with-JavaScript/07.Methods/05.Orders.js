let product = prompt();
let price = Number(prompt());
totalPriceOfProducts(product, price);

function totalPriceOfProducts(product, price) {
    let totalSum = 0;
    if (product === "coffee") {
        totalSum = price * 1.50;
    } else if (product === "water") {
        totalSum = price * 1.00;
    } else if (product === "coke") {
        totalSum = price * 1.40;
    } else if (product === "snacks") {
        totalSum = price * 2.00;
    }
    console.log(totalSum.toFixed(2));
}
