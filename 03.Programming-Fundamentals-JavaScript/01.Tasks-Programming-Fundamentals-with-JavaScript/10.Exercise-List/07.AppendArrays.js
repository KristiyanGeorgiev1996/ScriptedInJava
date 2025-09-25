let numbers = prompt().split("|").filter(x => x !== "").reverse();

for (let i = 0; i < numbers.length; i++) {
    let work = numbers[i].split(" ").filter(x => x !== "");

    for (let j = 0; j < work.length; j++) {
        process.stdout.write(work[j] + " ");
    }
}
