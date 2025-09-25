let n = Number(prompt());
let fruits = [];

for (let i = 0; i < n; i++) {
    fruits.push(prompt());
}

fruits.sort();

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}.${fruits[i]}`);
}
