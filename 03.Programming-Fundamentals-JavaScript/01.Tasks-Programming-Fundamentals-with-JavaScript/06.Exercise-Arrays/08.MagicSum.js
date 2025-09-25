let array = prompt().split(' ').map(Number);
let number = parseInt(prompt());

for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === number) {
            console.log(`${array[i]} ${array[j]}`);
        }
    }
}
