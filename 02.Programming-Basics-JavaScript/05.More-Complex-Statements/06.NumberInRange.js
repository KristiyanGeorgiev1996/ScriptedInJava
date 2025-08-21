let number = Number(prompt("Enter a number:"));

let isInRange = number >= -100 && number <= 100 && number !== 0;

if (isInRange) {
    console.log("Yes");
} else {
    console.log("No");
}
