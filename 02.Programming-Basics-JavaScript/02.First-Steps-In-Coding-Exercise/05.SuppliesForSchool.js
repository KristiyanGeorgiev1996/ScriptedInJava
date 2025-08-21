let penPacketPrice = 5.80;
let markerPacketPrice = 7.20;
let cleanerLiterPrice = 1.20;

let penPacketsCount = Number(prompt());
let markerPacketsCount = Number(prompt());
let cleanerLitresCount = Number(prompt());
let percentDiscount = Number(prompt());

let bill = penPacketPrice * penPacketsCount + markerPacketPrice * markerPacketsCount + cleanerLiterPrice * cleanerLitresCount;
let billWithDiscount = bill - (bill * percentDiscount / 100);

console.log(billWithDiscount);
