let numbers = prompt().split(" ").map(Number);
let result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        result.push(numbers[i]);
    }
}

result.reverse();

if (result.length === 0) {
    console.log("empty");
} else {
    console.log(result.join(" "));
}
