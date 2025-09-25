let array = prompt().split(' ').map(Number);

for (let i = 0; i < array.length; i++) {
    let isTop = true;
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] <= array[j]) {
            isTop = false;
            break;
        }
    }
    if (isTop) {
        process.stdout.write(array[i] + (i === array.length - 1 ? '' : ' '));
    }
}
