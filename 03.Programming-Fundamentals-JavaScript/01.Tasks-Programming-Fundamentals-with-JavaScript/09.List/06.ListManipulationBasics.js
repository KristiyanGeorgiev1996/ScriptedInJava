let numbers = prompt().split(" ").map(Number);
let command = prompt();

while (command !== "end") {
    let commandArray = command.split(" ");

    if (commandArray[0] === "Add") {
        let numberToAdd = Number(commandArray[1]);
        numbers.push(numberToAdd);
    } else if (commandArray[0] === "Remove") {
        let removeNumber = Number(commandArray[1]);
        numbers = numbers.filter(n => n !== removeNumber);
    } else if (commandArray[0] === "RemoveAt") {
        let removeAtIndex = Number(commandArray[1]);
        numbers.splice(removeAtIndex, 1);
    } else if (commandArray[0] === "Insert") {
        let number = Number(commandArray[1]);
        let index = Number(commandArray[2]);
        numbers.splice(index, 0, number);
    }

    command = prompt();
}

console.log(numbers.join(" "));
