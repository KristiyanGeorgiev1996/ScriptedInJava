let width = parseInt(prompt());
let length = parseInt(prompt());
let height = parseInt(prompt());

let freeSpace = width * length * height;

while (freeSpace > 0) {
    let input = prompt();

    if (input === "Done")
        break;

    freeSpace -= parseInt(input);
}

if (freeSpace >= 0) {
    console.log(`${freeSpace} Cubic meters left.`);
} else {
    console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
}
