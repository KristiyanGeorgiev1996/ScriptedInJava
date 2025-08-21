let figure = prompt();
let area = 0;

if (figure === "square") {
    let sideA = Number(prompt());
    area = sideA * sideA;
} else if (figure === "rectangle") {
    let sideA = Number(prompt());
    let sideB = Number(prompt());
    area = sideA * sideB;
} else if (figure === "circle") {
    let radius = Number(prompt());
    area = Math.PI * Math.pow(radius, 2);
} else if (figure === "triangle") {
    let sideA = Number(prompt());
    let heightA = Number(prompt());
    area = sideA * heightA / 2;
}

console.log(area.toFixed(3));
