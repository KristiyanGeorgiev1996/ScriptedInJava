let n = Number(prompt());

let names = [];

while (n > 0) {
    let nameGoing = prompt().split(" ");

    if (nameGoing[nameGoing.length - 2] === "is") {
        if (!names.includes(nameGoing[0])) {
            names.push(nameGoing[0]);
        } else {
            console.log(`${nameGoing[0]} is already in the list!`);
        }
    } else if (nameGoing[nameGoing.length - 2] === "not") {
        if (names.includes(nameGoing[0])) {
            let index = names.indexOf(nameGoing[0]);
            names.splice(index, 1);
        } else {
            console.log(`${nameGoing[0]} is not in the list!`);
        }
    }

    n--;
}

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
