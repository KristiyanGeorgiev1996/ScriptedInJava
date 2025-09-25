let lines = parseInt(prompt());
let pascalTriangle = [];

for (let row = 0; row < lines; row++) {
    pascalTriangle[row] = new Array(row + 1).fill(1);

    for (let col = 1; col < row; col++) {
        pascalTriangle[row][col] = pascalTriangle[row - 1][col - 1] + pascalTriangle[row - 1][col];
    }
}

for (let row = 0; row < lines; row++) {
    console.log(pascalTriangle[row].join(" "));
}
