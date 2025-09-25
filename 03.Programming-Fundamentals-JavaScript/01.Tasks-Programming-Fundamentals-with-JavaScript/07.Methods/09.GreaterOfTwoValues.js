let inputType = prompt();
let value1 = prompt();
let value2 = prompt();

console.log(gameMax(inputType, value1, value2));

function gameMax(inputType, value1, value2) {
    switch (inputType) {
        case "int":
            return Math.max(Number(value1), Number(value2));
        case "char":
        case "string":
            return value1[0] > value2[0] ? value1 : value2;
        default:
            return "";
    }
}
