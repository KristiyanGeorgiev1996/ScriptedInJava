let length = parseFloat(prompt());
let width = parseFloat(prompt());
let height = parseFloat(prompt());

let V1 = length * width * height;
let V = V1 / 3;

console.log(`Length: Width: Height: Pyramid Volume: ${V.toFixed(2)}`);
