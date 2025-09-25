let n = Number(prompt());
let x = Number(prompt());

mathPower(n, x);

function mathPower(n, x) {
    if (n !== 0 && x !== 0) {
        let result = Math.pow(n, x);
        console.log(result);
    } else {
        console.log(0);
    }
}
