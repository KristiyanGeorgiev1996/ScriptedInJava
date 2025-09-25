let sizeOfTheField = parseInt(prompt());
let initialIndexes = prompt().split(' ').map(Number);
let playground = new Array(sizeOfTheField).fill(0);

for (let idx of initialIndexes) {
    if (idx >= 0 && idx < playground.length) playground[idx] = 1;
}

let command;
while ((command = prompt()) !== "end") {
    let parts = command.split(' ');
    let start = parseInt(parts[0]);
    let direction = parts[1];
    let end = parseInt(parts[2]);

    if (start >= 0 && start < playground.length && playground[start] === 1) {
        if (direction === "left") playground = ladybugFlightLeft(start, end, playground);
        else if (direction === "right") playground = ladybugFlightRight(start, end, playground);
    }
}

console.log(playground.join(' '));

function ladybugFlightLeft(start, end, playground) {
    if (end === 0) return playground;
    if (end < 0) return ladybugFlightRight(start, Math.abs(end), playground);

    let flightIndex = start - end;

    if (flightIndex >= 0 && flightIndex < playground.length) {
        if (playground[flightIndex] === 0) {
            playground[flightIndex] = 1;
            playground[start] = 0;
        } else {
            let newIndex = -1;
            for (let i = flightIndex; i >= 0; i -= end) {
                if (playground[i] === 0) {
                    newIndex = i;
                    playground[newIndex] = 1;
                    playground[start] = 0;
                    break;
                }
            }
            if (newIndex < 0) playground[start] = 0;
        }
    } else playground[start] = 0;

    return playground;
}

function ladybugFlightRight(start, end, playground) {
    if (end === 0) return playground;
    if (end < 0) return ladybugFlightLeft(start, Math.abs(end), playground);

    let flightIndex = start + end;

    if (flightIndex >= 0 && flightIndex < playground.length) {
        if (playground[flightIndex] === 0) {
            playground[flightIndex] = 1;
            playground[start] = 0;
        } else {
            let newIndex = -1;
            for (let i = flightIndex; i < playground.length; i += end) {
                if (playground[i] === 0) {
                    newIndex = i;
                    playground[newIndex] = 1;
                    playground[start] = 0;
                    break;
                }
            }
            if (newIndex < 0) playground[start] = 0;
        }
    } else playground[start] = 0;

    return playground;
}
