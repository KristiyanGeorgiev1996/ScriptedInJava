let numbers = prompt().split(" ").map(Number);

while (true) {
    let command = prompt();
    if (command === "end") break;

    let parts = command.split(" ");
    let mainCommand = parts[0];

    if (mainCommand === "exchange") {
        let index = Number(parts[1]);
        if (index < 0 || index >= numbers.length) {
            console.log("Invalid index");
        } else {
            numbers = numbers.slice(index + 1).concat(numbers.slice(0, index + 1));
        }
    } else if (mainCommand === "max") {
        let type = parts[1];
        let max = -Infinity;
        let idx = -1;
        numbers.forEach((num, i) => {
            if ((type === "even" && num % 2 === 0 || type === "odd" && num % 2 !== 0) && num >= max) {
                max = num;
                idx = i;
            }
        });
        console.log(idx === -1 ? "No matches" : idx);
    } else if (mainCommand === "min") {
        let type = parts[1];
        let min = Infinity;
        let idx = -1;
        numbers.forEach((num, i) => {
            if ((type === "even" && num % 2 === 0 || type === "odd" && num % 2 !== 0) && num <= min) {
                min = num;
                idx = i;
            }
        });
        console.log(idx === -1 ? "No matches" : idx);
    } else if (mainCommand === "first") {
        let count = Number(parts[1]);
        let type = parts[2];
        if (count > numbers.length) {
            console.log("Invalid count");
        } else {
            let result = numbers.filter(num => (type === "even" ? num % 2 === 0 : num % 2 !== 0)).slice(0, count);
            console.log(JSON.stringify(result));
        }
    } else if (mainCommand === "last") {
        let count = Number(parts[1]);
        let type = parts[2];
        if (count > numbers.length) {
            console.log("Invalid count");
        } else {
            let result = numbers.filter(num => (type === "even" ? num % 2 === 0 : num % 2 !== 0));
            result = result.slice(-count);
            console.log(JSON.stringify(result));
        }
    }
}

console.log(JSON.stringify(numbers));
