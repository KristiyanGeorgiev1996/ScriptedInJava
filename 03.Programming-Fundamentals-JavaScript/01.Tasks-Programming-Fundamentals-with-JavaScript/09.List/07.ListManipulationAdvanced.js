let numbers = prompt().split(" ").map(Number);
let change = false;

while (true) {
    let command = prompt();
    if (command === "end") break;

    let tokens = command.split(" ");
    switch (tokens[0]) {
        case "Add":
            numbers.push(Number(tokens[1]));
            change = true;
            break;
        case "Remove":
            numbers = numbers.filter(n => n !== Number(tokens[1]));
            change = true;
            break;
        case "RemoveAt":
            numbers.splice(Number(tokens[1]), 1);
            change = true;
            break;
        case "Insert":
            numbers.splice(Number(tokens[2]), 0, Number(tokens[1]));
            change = true;
            break;
        case "Contains":
            console.log(numbers.includes(Number(tokens[1])) ? "Yes" : "No such number");
            break;
        case "PrintEven":
            console.log(numbers.filter(n => n % 2 === 0).join(" "));
            break;
        case "PrintOdd":
            console.log(numbers.filter(n => n % 2 !== 0).join(" "));
            break;
        case "GetSum":
            console.log(numbers.reduce((a, b) => a + b, 0));
            break;
        case "Filter":
            let sign = tokens[1];
            let numberF = Number(tokens[2]);
            let filtered = [];
            if (sign === ">") filtered = numbers.filter(n => n > numberF);
            else if (sign === "<") filtered = numbers.filter(n => n < numberF);
            else if (sign === ">=") filtered = numbers.filter(n => n >= numberF);
            else if (sign === "<=") filtered = numbers.filter(n => n <= numberF);
            console.log(filtered.join(" "));
            break;
    }
}

if (change) {
    console.log(numbers.join(" "));
}
