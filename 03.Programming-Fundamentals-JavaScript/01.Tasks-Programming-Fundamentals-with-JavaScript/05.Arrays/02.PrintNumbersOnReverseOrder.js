let numbers = parseInt(prompt());
let array = [];

for (let i = 0; i < numbers; i++) {
    array.push(parseInt(prompt()));
}

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i] + " ");
}
