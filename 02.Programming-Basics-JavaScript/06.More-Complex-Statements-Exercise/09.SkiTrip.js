// Input
let daysStay = Number(prompt()) - 1;
let typeRoom = prompt();
let feedback = prompt();

// Calculations
let bill = 0;

if (typeRoom === "room for one person") {
    bill = daysStay * 18;
} else if (typeRoom === "apartment") {
    bill = daysStay * 25;

    if (daysStay < 10) {
        bill *= 0.7; // 30% discount
    } else if (daysStay >= 10 && daysStay <= 15) {
        bill *= 0.65; // 35% discount
    } else if (daysStay > 15) {
        bill *= 0.5; // 50% discount
    }
} else if (typeRoom === "president apartment") {
    bill = daysStay * 35;

    if (daysStay < 10) {
        bill *= 0.9; // 10% discount
    } else if (daysStay >= 10 && daysStay <= 15) {
        bill *= 0.85; // 15% discount
    } else if (daysStay > 15) {
        bill *= 0.8; // 20% discount
    }
}

// Discount based on feedback
if (feedback === "positive") {
    bill *= 1.25; // 25% price increase
} else if (feedback === "negative") {
    bill *= 0.9; // 10% discount
}

// Output
console.log(bill.toFixed(2));
