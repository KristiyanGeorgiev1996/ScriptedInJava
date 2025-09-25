let numbersOfRead = parseInt(prompt());

let arr1 = new Array(numbersOfRead);
let arr2 = new Array(numbersOfRead);

for (let i = 0; i < numbersOfRead; i++) {
    let numbers = prompt().split(' ').map(Number);

    if (i === 0) {
        arr1[0] = numbers[0];
        arr2[0] = numbers[1];
    } else if (i === 1) {
        arr1[1] = numbers[1];
        arr2[1] = numbers[0];
    } else if (i === 2) {
        arr1[2] = numbers[0];
        arr2[2] = numbers[1];
    } else if (i === 3) {
        arr1[3] = numbers[1];
        arr2[3] = numbers[0];
    } else if (i === 4) {
        arr1[4] = numbers[0];
        arr2[4] = numbers[1];
    }
}

// Извеждане на първия масив
console.log(arr1.join(' '));

// Извеждане на втория масив
console.log(arr2.join(' '));
