let numbers = prompt().split(" ").map(Number);
let numbers2 = prompt().split(" ").map(Number);

let result = [];
let maxHeightList = Math.max(numbers.length, numbers2.length);

for (let i = 0; i < maxHeightList; i++) {
    if (i < numbers.length) {
        result.push(numbers[i]);
    }
    if (i < numbers2.length) {
        result.push(numbers2[i]);
    }
}

console.log(result.join(" "));
