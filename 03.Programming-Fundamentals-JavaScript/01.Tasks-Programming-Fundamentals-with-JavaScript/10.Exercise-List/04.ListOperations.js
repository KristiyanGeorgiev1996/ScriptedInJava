let numbers = prompt().split(" ").map(Number);

while (true) {
    let command = prompt();
    if (command === "End") break;

    let commandArray = command.split(" ");

    if (commandArray[0] === "Add") {
        let numberToAdd = Number(commandArray[1]);
        numbers.push(numberToAdd);
    } else if (commandArray[0] === "Insert") {
        let numberToInsert = Number(commandArray[1]);
        let indexToInsert = Number(commandArray[2]);
        if (indexToInsert >= numbers.length || indexToInsert < 0) {
            console.log("Invalid index");
        } else {
            numbers.splice(indexToInsert, 0, numberToInsert);
        }
    } else if (commandArray[0] === "Remove") {
        let indexToRemove = Number(commandArray[1]);
        if (indexToRemove >= numbers.length || indexToRemove < 0) {
            console.log("Invalid index");
        } else {
            numbers.splice(indexToRemove, 1);
        }
    } else if (commandArray[0] === "Shift" && commandArray[1] === "left") {
        let count = Number(commandArray[2]) % numbers.length;
        for (let i = 0; i < count; i++) {
            let n = numbers.shift();
            numbers.push(n);
        }
    } else if (commandArray[0] === "Shift" && commandArray[1] === "right") {
        let count = Number(commandArray[2]) % numbers.length;
        for (let i = 0; i < count; i++) {
            let x = numbers.pop();
            numbers.unshift(x);
        }
    }
}

console.log(numbers.join(" "));
