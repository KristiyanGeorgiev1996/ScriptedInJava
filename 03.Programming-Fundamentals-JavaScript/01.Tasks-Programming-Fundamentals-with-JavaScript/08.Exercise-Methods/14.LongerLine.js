const x1 = parseFloat(prompt());
const y1 = parseFloat(prompt());
const x2 = parseFloat(prompt());
const y2 = parseFloat(prompt());

const x3 = parseFloat(prompt());
const y3 = parseFloat(prompt());
const x4 = parseFloat(prompt());
const y4 = parseFloat(prompt());

const line1 = getDistanceBetweenTwoPoints(x1, y1, x2, y2);
const line2 = getDistanceBetweenTwoPoints(x3, y3, x4, y4);

const line1Point1IsCloserToZero = aPointCloserToTheZero(x1, y1, x2, y2);
const line2Point1IsCloserToZero = aPointCloserToTheZero(x3, y3, x4, y4);

if (line1 >= line2) {
    if (line1Point1IsCloserToZero) {
        console.log(`(${x1}, ${y1})(${x2}, ${y2})`);
    } else {
        console.log(`(${x2}, ${y2})(${x1}, ${y1})`);
    }
} else {
    if (line2Point1IsCloserToZero) {
        console.log(`(${x3}, ${y3})(${x4}, ${y4})`);
    } else {
        console.log(`(${x4}, ${y4})(${x3}, ${y3})`);
    }
}

function getDistanceBetweenTwoPoints(x1, y1, x2, y2) {
    const sideA = Math.abs(x2 - x1);
    const sideB = Math.abs(y2 - y1);
    return Math.sqrt((sideA * sideA) + (sideB * sideB));
}

function aPointCloserToTheZero(x1, y1, x2, y2) {
    const c1 = getHypotenuse(x1, y1);
    const c2 = getHypotenuse(x2, y2);
    return c1 <= c2;
}

function getHypotenuse(a, b) {
    return Math.sqrt((a * a) + (b * b));
}
