let n = Number(prompt());
let array = [];
let sum = 0;

for (let i = 0; i < n; i++) {
    let number = Number(prompt());
    array.push(number);
    sum += number;
}

// Извеждане на елементите на масива
console.log(array.join(' '));

// Извеждане на сумата
console.log(sum);
