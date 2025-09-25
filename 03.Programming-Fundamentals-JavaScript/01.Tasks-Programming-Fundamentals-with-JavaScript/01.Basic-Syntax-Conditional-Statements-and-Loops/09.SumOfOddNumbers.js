let odd = parseInt(prompt());
let sum = 0;

for (let i = 1; i <= odd + odd; i += 2) {
    sum += i;
    console.log(i);
}

console.log(`Sum: ${sum}`);
