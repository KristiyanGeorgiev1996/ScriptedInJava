// Input
let projectionType = prompt();
let rowsCount = Number(prompt());
let colsCount = Number(prompt());

// Prices
let premierePrice = 12;
let normalPrice = 7.5;
let discountPrice = 5;

// Calculations
let income = 0;

switch (projectionType) {
    case "Premiere":
        income = rowsCount * colsCount * premierePrice;
        break;
    case "Normal":
        income = rowsCount * colsCount * normalPrice;
        break;
    case "Discount":
        income = rowsCount * colsCount * discountPrice;
        break;
}

// Output
console.log(income.toFixed(2) + " leva");
