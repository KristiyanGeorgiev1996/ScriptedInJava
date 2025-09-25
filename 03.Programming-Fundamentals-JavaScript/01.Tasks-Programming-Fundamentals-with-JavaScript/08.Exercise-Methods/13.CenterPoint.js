const x1 = parseFloat(prompt());
const y1 = parseFloat(prompt());
const x2 = parseFloat(prompt());
const y2 = parseFloat(prompt());

const result = getPointCloseToZero(getFirstPoint(x1, y1), getSecondPoint(x2, y2));

if (result < 0) {
    console.log(`(${x1}, ${y1})`);
} else if (result > 0) {
    console.log(`(${x2}, ${y2})`);
} else {
    console.log(`(${x1}, ${y1})`);
}

function getPointCloseToZero(result1, result2) {
    if (result1 < result2) {
        return -1;
    } else if (result2 < result1) {
        return 1;
    }
    return 0;
}

function getFirstPoint(x1, y1) {
    return Math.sqrt(Math.abs(x1 * x1) + Math.abs(y1 * y1));
}

function getSecondPoint(x2, y2) {
    return Math.sqrt(Math.abs(x2 * x2) + Math.abs(y2 * y2));
}
