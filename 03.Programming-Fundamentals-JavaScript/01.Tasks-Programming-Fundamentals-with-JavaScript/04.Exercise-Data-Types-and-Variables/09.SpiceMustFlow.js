let dobivs = parseFloat(prompt());

let days = 0;
let allDobiv = 0;

while (true) {
    if (dobivs >= 100) {
        days++;
        let n = dobivs - 26;
        allDobiv += n;
        dobivs -= 10;
    } else if (dobivs < 100) {
        allDobiv -= 26;
        dobivs -= 10;
        if (allDobiv <= 0) {
            allDobiv = 0;
        }
        dobivs -= 10;
        break;
    }

    if (dobivs < 0) {
        break;
    }
}

console.log(days);
console.log(allDobiv);
