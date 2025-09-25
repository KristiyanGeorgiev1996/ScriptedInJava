let key = parseInt(prompt());
let n = parseInt(prompt());

for (let i = 0; i < n; i++) {
    let input = prompt();
    let shifted = input.charCodeAt(0) + key;
    console.log(String.fromCharCode(shifted));
}
