let n = parseInt(prompt());

for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let divider = 2; divider < i; divider++) {
        if (i % divider === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${i} -> true`);
    } else {
        console.log(`${i} -> false`);
    }
}
