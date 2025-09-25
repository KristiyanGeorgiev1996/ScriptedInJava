let list = prompt().split(' ');

while (true) {
    let line = prompt();
    if (line === "3:1") break;

    let data = line.split(' ');
    let start = parseInt(data[1]);
    let end = parseInt(data[2]);

    if (data[0] === "merge") {
        if (start < 0) start = 0;
        if (end >= list.length) end = list.length - 1;

        for (let diff = end - start; diff > 0; diff--) {
            list[start] += list[start + 1];
            list.splice(start + 1, 1);
        }
    }

    if (data[0] === "divide") {
        let partSize = Math.floor(list[start].length / end);
        let counter = end;
        let off = 1;

        while (counter > 1) {
            counter--;
            list.splice(start + off, 0, list[start].substring(0, partSize));
            off++;
            list[start] = list[start].substring(partSize);
        }

        list.splice(start + off, 0, list[start]);
        list.splice(start, 1);
    }
}

console.log(list.join(' '));
