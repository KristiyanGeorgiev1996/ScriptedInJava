let list = prompt().split(", ");

while (true) {
    let input = prompt();
    if (input === "course start") break;

    let command = input.split(":");
    list = softUniCoursePlanning(list, command);
}

for (let i = 0; i < list.length; i++) {
    console.log(`${i + 1}.${list[i]}`);
}

function softUniCoursePlanning(list, command) {
    switch (command[0]) {
        case "Add": return add(list, command);
        case "Insert": return insert(list, command);
        case "Remove": return remove(list, command);
        case "Swap": return swap(list, command);
        case "Exercise": return exercise(list, command);
        default: return list;
    }
}

function add(list, command) {
    let lessonTitle = command[1];
    if (!list.includes(lessonTitle)) list.push(lessonTitle);
    return list;
}

function insert(list, command) {
    let lessonTitle = command[1];
    let index = Number(command[2]);
    if (!list.includes(lessonTitle) && index >= 0 && index < list.length) {
        list.splice(index, 0, lessonTitle);
    }
    return list;
}

function remove(list, command) {
    let lessonTitle = command[1];
    if (list.includes(lessonTitle)) list.splice(list.indexOf(lessonTitle), 1);
    if (list.includes(lessonTitle + "-Exercise")) list.splice(list.indexOf(lessonTitle + "-Exercise"), 1);
    return list;
}

function swap(list, command) {
    let lessonTitle1 = command[1];
    let lessonTitle2 = command[2];

    if (list.includes(lessonTitle1) && list.includes(lessonTitle2)) {
        let index1 = list.indexOf(lessonTitle1);
        let index2 = list.indexOf(lessonTitle2);
        [list[index1], list[index2]] = [list[index2], list[index1]];

        if (list.includes(lessonTitle1 + "-Exercise")) {
            list.splice(list.indexOf(lessonTitle1 + "-Exercise"), 1);
            list.splice(list.indexOf(lessonTitle1) + 1, 0, lessonTitle1 + "-Exercise");
        }

        if (list.includes(lessonTitle2 + "-Exercise")) {
            list.splice(list.indexOf(lessonTitle2 + "-Exercise"), 1);
            list.splice(list.indexOf(lessonTitle2) + 1, 0, lessonTitle2 + "-Exercise");
        }
    }

    return list;
}

function exercise(list, command) {
    let lessonTitle = command[1];
    if (list.includes(lessonTitle) && !list.includes(lessonTitle + "-Exercise")) {
        let index = list.indexOf(lessonTitle);
        list.splice(index + 1, 0, lessonTitle + "-Exercise");
    } else if (!list.includes(lessonTitle)) {
        list.push(lessonTitle, lessonTitle + "-Exercise");
    }
    return list;
}
