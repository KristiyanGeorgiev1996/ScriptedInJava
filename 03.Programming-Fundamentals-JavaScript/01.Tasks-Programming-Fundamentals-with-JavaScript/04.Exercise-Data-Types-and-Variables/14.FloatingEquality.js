const eps = 0.000001;

let n1 = parseFloat(prompt());
let n2 = parseFloat(prompt());

let isEqual = Math.abs(n1 - n2) < eps;

if (isEqual) {
    console.log("True");
} else {
    console.log("False");
}
