let city = prompt("Enter city:");
let sales = Number(prompt("Enter sales:"));

let commission = 0;

if (city === "Sofia") {
    if (sales < 0) {
        console.log("error");
    } else if (sales <= 500) {
        commission = 5;
    } else if (sales <= 1000) {
        commission = 7;
    } else if (sales <= 10000) {
        commission = 8;
    } else {
        commission = 12;
    }
} else if (city === "Varna") {
    if (sales < 0) {
        console.log("error");
    } else if (sales <= 500) {
        commission = 4.5;
    } else if (sales <= 1000) {
        commission = 7.5;
    } else if (sales <= 10000) {
        commission = 10;
    } else {
        commission = 13;
    }
} else if (city === "Plovdiv") {
    if (sales < 0) {
        console.log("error");
    } else if (sales <= 500) {
        commission = 5.5;
    } else if (sales <= 1000) {
        commission = 8;
    } else if (sales <= 10000) {
        commission = 12;
    } else {
        commission = 14.5;
    }
} else {
    console.log("error");
}

if (commission > 0) {
    let output = commission * sales / 100;
    console.log(output.toFixed(2));
}
