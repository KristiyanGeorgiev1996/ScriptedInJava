let number = parseInt(prompt());
let number2 = parseInt(prompt());
let number3 = parseInt(prompt());

if (number >= number2 && number >= number3) {
    console.log(number);
    if (number2 >= number3) {
        console.log(number2);
        console.log(number3);
    } else {
        console.log(number3);
        console.log(number2);
    }
} 
if (number2 >= number3 && number2 >= number) {
    console.log(number2);
    if (number > number3) {
        console.log(number);
        console.log(number3);
    } else {
        console.log(number3);
        console.log(number);
    }
}
if (number3 >= number2 && number3 >= number) {
    console.log(number3);
    if (number >= number2) {
        console.log(number);
        console.log(number2);
    } else {
        console.log(number2);
        console.log(number);
    }
}
