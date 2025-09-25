let countOfFloors = parseInt(prompt());
let countOfRooms = parseInt(prompt());

for (let floor = countOfFloors; floor >= 1; floor--) {
    let line = "";
    for (let room = 0; room < countOfRooms; room++) {
        if (countOfFloors === floor) {
            line += `L${floor}${room} `;
        } else if (floor % 2 === 0) {
            line += `O${floor}${room} `;
        } else if (floor % 2 === 1) {
            line += `A${floor}${room} `;
        }
    }
    console.log(line.trim());
}
