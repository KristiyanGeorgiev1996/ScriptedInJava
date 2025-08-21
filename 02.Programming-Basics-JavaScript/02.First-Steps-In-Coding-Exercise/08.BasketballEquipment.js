let yearBasketBallFee = Number(prompt());

let shoesPrice = yearBasketBallFee - (yearBasketBallFee * 0.4);
let equipmentPrice = shoesPrice - (shoesPrice * 0.2);
let basketBallPrice = equipmentPrice / 4;
let accessoriesPrice = basketBallPrice / 5;

let bill = yearBasketBallFee + shoesPrice + equipmentPrice + basketBallPrice + accessoriesPrice;
console.log(bill);
