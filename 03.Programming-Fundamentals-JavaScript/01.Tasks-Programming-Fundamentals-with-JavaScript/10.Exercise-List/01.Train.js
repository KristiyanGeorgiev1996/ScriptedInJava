let passengers = prompt().split(" ").map(Number);
let maxPassengers = Number(prompt());
let command = prompt();

while (command !== "end") {
    let commandArray = command.split(" ");

    if (commandArray[0] === "Add") {
        let numberToAdd = Number(commandArray[1]);
        passengers.push(numberToAdd);
    } else {
        let myInt = Number(command);
        if (myInt <= maxPassengers) {
            for (let i = 0; i < passengers.length; i++) {
                if (passengers[i] + myInt <= maxPassengers) {
                    passengers[i] += myInt;
                    break;
                }
            }
        }
    }

    command = prompt();
}

console.log(passengers.join(" "));
