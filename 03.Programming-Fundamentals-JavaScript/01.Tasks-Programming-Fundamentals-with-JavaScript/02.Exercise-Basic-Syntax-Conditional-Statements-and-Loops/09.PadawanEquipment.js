let money = parseFloat(prompt());
let students = parseInt(prompt());
let swords = parseFloat(prompt());
let belt = parseFloat(prompt());
let robe = parseFloat(prompt());

let realSwords = students * 1.1;
let realPriceSwords = Math.ceil(realSwords);

let freeBelts = Math.floor(students / 6);
let realBelts = students - freeBelts;

let allPriceOfSwords = swords * realPriceSwords;
let allPriceOfBelts = realBelts * belt;
let allPriceOfRobe = students * robe;

let allSum = allPriceOfSwords + allPriceOfBelts + allPriceOfRobe;

if (allSum <= money) {
    console.log(`The money is enough - it would cost ${allSum.toFixed(2)}lv.`);
} else {
    let needed = allSum - money;
    console.log(`John will need ${needed.toFixed(2)}lv more.`);
}
