let chickenMenuPrice = 10.35;
let fishMenuPrice = 12.40;
let vegetarianMenuPrice = 8.15;

let ckickenMenusCount = Number(prompt());
let fishMenusCount = Number(prompt());
let vegetarianMenusCount = Number(prompt());

let bill = chickenMenuPrice * ckickenMenusCount + fishMenuPrice * fishMenusCount + vegetarianMenuPrice * vegetarianMenusCount;
let dessertPrice = bill * 0.2;
let finalBill = bill + dessertPrice + 2.50;

console.log(finalBill);
