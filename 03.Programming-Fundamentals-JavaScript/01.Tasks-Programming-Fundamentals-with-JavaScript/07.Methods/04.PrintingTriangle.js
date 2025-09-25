let n = Number(prompt());
rectangle(n);

function rectangle(n) {
    for (let i = 0; i < n; i++) {
        rectangleRow(i + 1);
    }
    for (let i = 1; i < n; i++) {
        rectangleRow(n - i);
    }
}

function rectangleRow(n) {
    let row = "";
    for (let i = 0; i < n; i++) {
        row += (i + 1) + " ";
    }
    console.log(row.trim());
}
