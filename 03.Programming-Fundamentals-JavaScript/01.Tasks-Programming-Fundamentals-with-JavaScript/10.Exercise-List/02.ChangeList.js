let numbers = prompt().split(" ").map(Number);

while (true) {
    let command = prompt();
    let commandArray = command.split(" ");

    if (command === "end") {
        break;
    }

    if (commandArray[0] === "Delete") {
        let numberToDelete = Number(commandArray[1]);
        numbers = numbers.filter(n => n !== numberToDelete);
    } else if (commandArray[0] === "Insert") {
        let numberToInsert = Number(commandArray[1]);
        let indexToInsert = Number(commandArray[2]);
        numbers.splice(indexToInsert, 0, numberToInsert);
    }
}

console.log(numbers.join(" "));
