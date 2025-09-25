let day = prompt();
let ages = parseInt(prompt());

if (day === "Weekday") {
    if (ages >= 0 && ages <= 18) {
        console.log("12$");
    } else if (ages >= 19 && ages <= 64) {
        console.log("18$");
    } else if (ages >= 65 && ages <= 122) {
        console.log("12$");
    } else {
        console.log("Error!");
    }
} else if (day === "Weekend") {
    if (ages >= 0 && ages <= 18) {
        console.log("15$");
    } else if (ages >= 19 && ages <= 64) {
        console.log("20$");
    } else if (ages >= 65 && ages <= 122) {
        console.log("15$");
    } else {
        console.log("Error!");
    }
} else if (day === "Holiday") {
    if (ages >= 0 && ages <= 18) {
        console.log("5$");
    } else if (ages >= 19 && ages <= 64) {
        console.log("12$");
    } else if (ages >= 65 && ages <= 122) {
        console.log("10$");
    } else {
        console.log("Error!");
    }
} else {
    console.log("Error!");
}
