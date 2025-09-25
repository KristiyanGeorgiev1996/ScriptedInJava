let n = parseInt(require("fs").readFileSync(0, "utf8").trim());

let currentNumber = 0;
let isBigger = false;

for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
        currentNumber++;

        if (currentNumber > n) {
            isBigger = true;
            break;
        }

        line += currentNumber + " ";
    }
    console.log(line.trim());

    if (isBigger) {
        break;
    }
}
