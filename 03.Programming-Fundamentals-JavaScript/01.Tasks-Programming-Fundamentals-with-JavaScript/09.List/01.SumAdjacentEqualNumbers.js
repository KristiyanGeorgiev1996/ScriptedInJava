let numbers = prompt().split(" ").map(Number);

for (let i = 0; i < numbers.length; i++) {
    let nextIndex = 0;
    if (i + 1 > numbers.length - 1) break;
    else nextIndex = i + 1;

    if (numbers[i] === numbers[nextIndex]) {
        numbers[i] += numbers[nextIndex];
        numbers.splice(nextIndex, 1);
        i = -1;
    }
}

console.log(numbers.join(" "));
