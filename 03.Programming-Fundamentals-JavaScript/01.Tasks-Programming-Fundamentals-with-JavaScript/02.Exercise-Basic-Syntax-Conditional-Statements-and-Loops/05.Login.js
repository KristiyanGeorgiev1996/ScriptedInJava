let username = prompt();

let poswword = username.split("").reverse().join("");
let opit = 4;

while (opit > 0) {
    opit -= 1;
    let typePass = prompt();

    if (typePass === poswword) {
        console.log(`User ${username} logged in.`);
        break;
    } else {
        if (opit === 0) {
            console.log(`User ${username} blocked!`);
        } else {
            console.log(`Incorrect password. Try again.`);
        }
    }
}
