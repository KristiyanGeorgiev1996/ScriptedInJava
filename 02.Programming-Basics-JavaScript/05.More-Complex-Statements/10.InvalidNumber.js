let number = Number(prompt("Enter a number:"));

let isValid = (number >= 100 && number <= 200) || number === 0;

if (!isValid) {
    console.log("invalid");
}
