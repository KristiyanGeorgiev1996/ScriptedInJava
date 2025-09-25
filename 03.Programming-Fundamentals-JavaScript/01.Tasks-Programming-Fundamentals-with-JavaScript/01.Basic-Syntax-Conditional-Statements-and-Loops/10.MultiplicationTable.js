let n = parseInt(prompt());

let times = 0;

for (let i = 1; i <= 10; i++) {
    times += 1;
    let product = n * times;
    console.log(`${n} X ${times} = ${product}`);
}
