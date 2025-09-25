let peoples = parseInt(prompt());
let typeOfGroup = prompt();
let dayOfWeek = prompt();

let price = 0;
let discount = 0;
let totalPrice = 0;

if (typeOfGroup === "Students" && dayOfWeek === "Friday") {
    price = peoples * 8.45;
    if (peoples >= 30) {
        discount = price * 0.85;
        totalPrice = discount;
    } else {
        totalPrice = price;
    }
} else if (typeOfGroup === "Students" && dayOfWeek === "Saturday") {
    price = peoples * 9.80;
    if (peoples >= 30) {
        discount = price * 0.85;
        totalPrice = discount;
    } else {
        totalPrice = price;
    }
} else if (typeOfGroup === "Students" && dayOfWeek === "Sunday") {
    price = peoples * 10.46;
    if (peoples >= 30) {
        discount = price * 0.85;
        totalPrice = discount;
    } else {
        totalPrice = price;
    }
} else if (typeOfGroup === "Business" && dayOfWeek === "Friday") {
    price = peoples * 10.90;
    if (peoples >= 100) {
        let people = peoples - 10;
        totalPrice = people * 10.90;
    } else {
        totalPrice = price;
    }
} else if (typeOfGroup === "Business" && dayOfWeek === "Saturday") {
    price = peoples * 15.60;
    if (peoples >= 100) {
        let people = peoples - 10;
        totalPrice = people * 15.60;
    } else {
        totalPrice = price;
    }
} else if (typeOfGroup === "Business" && dayOfWeek === "Sunday") {
    price = peoples * 16;
    if (peoples >= 100) {
        let people = peoples - 10;
        totalPrice = people * 16;
    } else {
        totalPrice = price;
    }
} else if (typeOfGroup === "Regular" && dayOfWeek === "Friday") {
    price = peoples * 15;
    if (peoples >= 10 && peoples <= 20) {
        discount = price * 0.95;
        totalPrice = discount;
    } else {
        totalPrice = price;
    }
} else if (typeOfGroup === "Regular" && dayOfWeek === "Saturday") {
    price = peoples * 20;
    if (peoples >= 10 && peoples <= 20) {
        discount = price * 0.95;
        totalPrice = discount;
    } else {
        totalPrice = price;
    }
} else if (typeOfGroup === "Regular" && dayOfWeek === "Sunday") {
    price = peoples * 22.50;
    if (peoples >= 10 && peoples <= 20) {
        discount = price * 0.95;
        totalPrice = discount;
    } else {
        totalPrice = price;
    }
}

console.log(`Total price: ${totalPrice.toFixed(2)}`);
