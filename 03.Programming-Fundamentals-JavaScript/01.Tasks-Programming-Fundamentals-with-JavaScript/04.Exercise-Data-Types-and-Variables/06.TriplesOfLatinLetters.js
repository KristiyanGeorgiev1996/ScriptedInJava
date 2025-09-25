let n = parseInt(prompt());

for (let i = 0; i < n; i++) {
    let firstChar = String.fromCharCode('a'.charCodeAt(0) + i);
    for (let j = 0; j < n; j++) {
        let secChar = String.fromCharCode('a'.charCodeAt(0) + j);
        for (let k = 0; k < n; k++) {
            let thirdChar = String.fromCharCode('a'.charCodeAt(0) + k);
            console.log(firstChar + secChar + thirdChar);
        }
    }
}
