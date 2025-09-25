let destination = prompt();

while (destination !== "End") {
    let neededMoney = parseFloat(prompt());
    let savedMoney = 0;

    while (savedMoney < neededMoney) {
        let currentMoney = parseFloat(prompt());
        savedMoney += currentMoney;
    }

    console.log(`Going to ${destination}!`);

    destination = prompt();
}
