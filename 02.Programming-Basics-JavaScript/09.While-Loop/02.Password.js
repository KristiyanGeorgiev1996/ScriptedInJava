let username = prompt();
let password = prompt();

let passwordInput = prompt();

while (passwordInput !== password) {
    passwordInput = prompt();
}

console.log(`Welcome ${username}!`);
