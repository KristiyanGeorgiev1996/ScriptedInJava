let n = Number(prompt());
whatIsN(n);

function whatIsN(n) {
    if (n >= 2.00 && n <= 2.99) {
        console.log("Fail");
    } else if (n >= 3.00 && n <= 3.49) {
        console.log("Poor");
    } else if (n >= 3.50 && n <= 4.49) {
        console.log("Good");
    } else if (n >= 4.50 && n <= 5.49) {
        console.log("Very good");
    } else if (n >= 5.50 && n <= 6.00) {
        console.log("Excellent");
    }
}
