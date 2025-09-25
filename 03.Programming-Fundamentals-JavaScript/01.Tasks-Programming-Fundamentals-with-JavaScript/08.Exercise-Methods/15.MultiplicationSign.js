const num1 = parseFloat(prompt());
const num2 = parseFloat(prompt());
const num3 = parseFloat(prompt());

resultSign(num1, num2, num3);

function resultSign(n1, n2, n3) {
    if (n1 === 0 || n2 === 0 || n3 === 0) {
        console.log("zero");
    } else if (
        (n1 > 0 && n2 > 0 && n3 > 0) ||
        (n1 < 0 && n2 < 0 && n3 > 0) ||
        (n1 < 0 && n2 > 0 && n3 < 0) ||
        (n1 > 0 && n2 < 0 && n3 < 0)
    ) {
        console.log("positive");
    } else {
        console.log("negative");
    }
}
