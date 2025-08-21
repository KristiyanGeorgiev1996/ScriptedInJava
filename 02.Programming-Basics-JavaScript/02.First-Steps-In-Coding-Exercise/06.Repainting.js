let nylonPrice = 1.50;
let paintPrice = 14.50;
let paintThinnerPrice = 5.00;

let nylonNeeded = Number(prompt());
let paintNeeded = Number(prompt());
let paintThinnerNeeded = Number(prompt());
let workingHours = Number(prompt());

let nylonSum = nylonPrice * (nylonNeeded + 2);
let paintSum = paintPrice * (paintNeeded + paintNeeded * 0.1);
let paintThinnerSum = paintThinnerPrice * paintThinnerNeeded;
let bagsPrice = 0.40;

let materialsPrice = paintSum + nylonSum + paintThinnerSum + bagsPrice;
let workMenPrice = workingHours * (materialsPrice * 0.3);

console.log(workMenPrice + materialsPrice);
