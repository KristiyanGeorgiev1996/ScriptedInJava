const array1 = prompt().split(' ').map(Number);
const array2 = prompt().split(' ').map(Number);

let sumOfAllNumbers = 0;
let identical = true;

for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        identical = false;
        break;
    } else {
        sumOfAllNumbers += array1[i];
    }
}

if (identical) {
    console.log(`Arrays are identical. Sum: ${sumOfAllNumbers}`);
}
