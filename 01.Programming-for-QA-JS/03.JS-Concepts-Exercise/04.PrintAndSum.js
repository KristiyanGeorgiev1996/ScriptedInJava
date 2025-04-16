function solve(arr){
    let start = Number(arr[0]);
    let end = Number(arr[1]);

    let numbers = [];
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
        numbers.push(i);
    }

    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
}