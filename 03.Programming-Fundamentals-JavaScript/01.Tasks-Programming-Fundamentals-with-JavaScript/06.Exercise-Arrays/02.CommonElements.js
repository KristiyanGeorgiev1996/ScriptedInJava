let arr1 = prompt().split(' ');
let arr2 = prompt().split(' ');

for (let i = 0; i < arr2.length; i++) {
    let temp = arr2[i];
    for (let j = 0; j < arr1.length; j++) {
        if (arr1[j] === temp) {
            process.stdout.write(temp + ' ');
            break; // добавяме break, за да не печата повторно при многократни съвпадения
        }
    }
}
console.log(); // за нов ред накрая
